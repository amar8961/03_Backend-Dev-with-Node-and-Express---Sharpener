const express = require("express");

const router = express.Router();

// The Path module provides a way of working with directories and file paths.
const path = require("path");

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  console.log("GIT IT");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;

