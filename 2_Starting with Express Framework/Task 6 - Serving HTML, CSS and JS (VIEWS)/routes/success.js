const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

router.get("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
