const express = require('express');
const router = express.Router();

const expenseControllers = require('../controllers/expenseControllers')

router.post('/addExpense', expenseControllers.addExpense)

module.exports = router;