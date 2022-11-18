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
