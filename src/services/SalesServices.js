const SalesModel = require("../models/SalesModel")



const TotalSalesService = async () => {
    try {
        const TotalSalesStage = { $group: { _id: null, totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } }
       let data= await SalesModel.aggregate([
        TotalSalesStage
      ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};


const QuantitybyProductService = async () => {
    try {
        const TotalQuantityStage = {
            $group: {
              _id: '$product',
              totalQuantity: { $sum: '$quantity' }
            }
          }
       let data= await SalesModel.aggregate([
        TotalQuantityStage
      ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};



const TopProductsService = async () => {
    try {
       let data= await SalesModel.aggregate([
        { $group: { _id: '$product', totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } },
        { $sort: { totalRevenue: -1 } },
        { $limit: 5 }
      ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};



const AveragePriceService = async () => {
    try {
       let data= await SalesModel.aggregate([
        { $group: { _id: null, averagePrice: { $avg: '$price' } } },
      ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};



const RevenueByMonthService = async () => {
    try {
        let data = await SalesModel.aggregate([
            {
                $addFields: {
                  date: { $toDate: "$date" },
                },
              },
              {
                $project: {
                  yearMonth: { $dateToString: { format: "%Y-%m", date: "$date" } },
                  sell_revenue: { $multiply: ["$quantity", "$price"] },
                },
              },
              {
                $group: {
                  _id: "$yearMonth",
                  totalRevenue: { $sum: "$sell_revenue" },
                },
              },
              {
                $sort: {
                  _id: 1,
                },
              }
        ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};



const HighestQuantitySoldService = async () => {
    try {
       let data = await SalesModel.findOne().sort({ quantity: -1 });
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};



const DepartmentSalaryExpenseService = async () => {
    try {
       let data = await SalesModel.aggregate([
        {
            $group: {
              _id: '$department',
              totalSalaryExpense: { $sum: '$salary' }
            }
        }
      ]);
       return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    };
};





module.exports={
    TotalSalesService,
    QuantitybyProductService,
    TopProductsService,
    AveragePriceService,
    RevenueByMonthService,
    HighestQuantitySoldService,
    DepartmentSalaryExpenseService
};