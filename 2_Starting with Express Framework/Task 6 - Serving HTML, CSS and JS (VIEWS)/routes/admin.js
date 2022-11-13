const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// admin/add-product => POST
// we reach admin/product because 'admin.js' all files request via '2_app_StartingWithExpressFramework.js' app.use('/admin', adminRoutes);
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/");
});

module.exports = router;
