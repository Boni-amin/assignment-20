const express=require('express');
const SalesControllers = require('../controllers/SalesController');

const router=express.Router();



router.get('/sales/total-revenue',SalesControllers.TotalSalesRevenue); 
router.get('/sales/quantity-by-product',SalesControllers.TotalQuantitybyProduct); 
router.get('/sales/top-products',SalesControllers.TopProducts);
router.get('/sales/average-price',SalesControllers.AveragePrice);
router.get('/sales/revenue-by-month',SalesControllers.RevenueByMonth);
router.get('/sales/highest-quantity-sold',SalesControllers.HighestQuantitySold);
router.get('/sales/department-salary-expense',SalesControllers.DepartmentSalaryExpense);



module.exports = router;