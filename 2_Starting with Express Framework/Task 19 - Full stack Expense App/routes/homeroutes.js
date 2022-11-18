// using express
const express = require("express");

const router = express.Router();

// The Path module provides a way of working with directories and file paths.
const path = require("path");

const rootDir = require("../util/path");

// create route for home ('/) page.
router.get("/", (req, res, next) => {
  console.log("GOT HOME");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
