const express = require('express');
const router = express.Router();

const userAuthentication = require('../middleware/auth');

const expenseControllers = require('../controllers/expenseControllers')

router.post('/addExpense', userAuthentication.authenticate , expenseControllers.addExpense);

router.get('/getExpense', userAuthentication.authenticate , expenseControllers.getExpense);

router.delete('/deleteExpense/:expenseid', userAuthentication.authenticate , expenseControllers.deleteExpense);

module.exports = router;