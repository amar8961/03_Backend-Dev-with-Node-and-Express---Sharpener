// using sequelize
const Sequelize = require("sequelize");

// import database
const sequelize = require("../util/database");

// Create Table, Table Name -> expenses
const Expenses = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  expenses: Sequelize.STRING,

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Expenses;
