const express = require("express");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  res.send("<h1>Hello from Shop!</h1>");
});

module.exports = router;
