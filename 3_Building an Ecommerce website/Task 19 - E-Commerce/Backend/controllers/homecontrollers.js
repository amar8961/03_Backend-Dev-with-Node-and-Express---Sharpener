// The Path module provides a way of working with directories and file paths.
const path = require("path");

const rootDir = require("../util/path");

exports.getHome = (req, res, next) => {
  console.log("GOT IT");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};
