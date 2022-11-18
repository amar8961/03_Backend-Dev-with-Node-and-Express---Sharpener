// The Path module provides a way of working with directories and file paths.
const path = require("path");
const rootDir = require("../util/path");

// create controllers for for home ('/) page.
exports.getHome = (req, res, next) => {
  console.log("GOT HOME");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};

// Import models
const Expenses = require("../models/homemodels");

// create controller for save data
exports.addData = async (req, res, next) => {
  try {
    if (!req.body.category) {
      throw new Error("category is mandatory");
    }
    const expenses = req.body.expenses;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expenses.create({
      expenses: expenses,
      description: description,
      category: category,
    });
    // newExpenses -> send data to frontend
    res.status(201).json({ newExpenses: data }); // The HTTP 201 Created success status response code
    // res.sendFile(path.join(rootDir, "views", "home.html"));
  } catch (err) {
    console.log("ERROR");
    // HTTP 500 Internal Server Error server error response code.
    res.status(500).json({
      error: err,
    });
  }
};
