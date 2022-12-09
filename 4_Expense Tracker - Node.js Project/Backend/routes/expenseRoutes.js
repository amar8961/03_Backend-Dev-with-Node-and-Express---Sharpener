const express = require('express');
const router = express.Router();

const userAuthentication = require('../middleware/auth');

const expenseControllers = require('../controllers/expenseControllers')

router.post('/addExpense', userAuthentication.authenticate , expenseControllers.addExpense);

// router.get('/getExpense', userAuthentication.authenticate , expenseControllers.getExpense);
router.get('/expensesData/:pageNo', userAuthentication.authenticate , expenseControllers.getExpenses);

// router.get('/pages/:pages', expenseControllers.updatePages)

router.delete('/deleteExpense/:expenseid', userAuthentication.authenticate , expenseControllers.deleteExpense);

router.get('/download', userAuthentication.authenticate, expenseControllers.downloadExpenses)

module.exports = router;