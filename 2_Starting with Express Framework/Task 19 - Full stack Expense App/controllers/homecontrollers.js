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

// create controller for get data from database
exports.getData = async (req, res, next) => {
  try {
    const data = await Expenses.findAll();
    res.status(200).json({ newExpenses: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
  // const data = await Booking.findAll();
  // res.status(200).json({ newExpenses: data });
};

// create controller for delete data from database
exports.deleteData = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("ID IS MISSING");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    // destroy method for deleting data.
    await Expenses.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// create controller for edit data from database
// logic is not correct just for try this.
exports.editData = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("ID IS MISSING");
      return res.status(400).json({ err: "ID is missing" });
      // HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
    }
    const uId = req.params.id;
    // destroy method for deleting data.
    await Expenses.upsert({ where: { id: uId } });
    res.sendStatus(200);
    // The HTTP 200 OK success status response code indicates that the request has succeeded.
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    // The HTTP status code 500 is a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request.
  }
};
