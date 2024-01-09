const {TotalSalesService, QuantitybyProductService, TopProductsService, AveragePriceService, RevenueByMonthService, HighestQuantitySoldService, DepartmentSalaryExpenseService} = require('../services/SalesServices')



exports.TotalSalesRevenue = async (req,res)=>{
    let result=await TotalSalesService();
    return res.status(200).json(result);
};

exports.TotalQuantitybyProduct= async (req,res)=>{
    let result=await QuantitybyProductService();
    return res.status(200).json(result);
};


exports.TopProducts= async (req,res)=>{
    let result=await TopProductsService();
    return res.status(200).json(result);
};


exports.AveragePrice= async (req,res)=>{
    let result=await AveragePriceService();
    return res.status(200).json(result);
};


exports.RevenueByMonth= async (req,res)=>{
    let result=await RevenueByMonthService();
    return res.status(200).json(result);
};


exports.HighestQuantitySold= async (req,res)=>{
    let result=await HighestQuantitySoldService();
    return res.status(200).json(result);
};


exports.DepartmentSalaryExpense= async (req,res)=>{
    let result=await DepartmentSalaryExpenseService();
    return res.status(200).json(result);
};
