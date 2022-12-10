const express = require('express');

const expensesController = require('../controller/expenses');

const authenticator=require('../middleware/auth')

const router = express.Router();

router.get('/', expensesController.showServer);

router.get('/expensesData', authenticator.authenticate, expensesController.getExpenses);

router.get('/expensesData/:id', expensesController.getExpense)

router.post('/expensesData', authenticator.authenticate, expensesController.addExpense);

router.delete('/expensesData/:id', expensesController.deleteExpense);

router.put('/expensesData/:id', expensesController.editExpense);

module.exports = router;