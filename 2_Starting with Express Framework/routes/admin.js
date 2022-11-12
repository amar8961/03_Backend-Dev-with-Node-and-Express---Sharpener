const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="Product"><input type="text" name="title" placeholder="Size"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/");
});

module.exports = router;
