const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  console.log("In another middleware!");
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});


router.post("/success", (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/success");
});

module.exports = router;
