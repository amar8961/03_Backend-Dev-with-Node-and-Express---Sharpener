const express = require("express");

const router = express.Router();

// login => GET
router.get("/login", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="Username"><button type="submit">Login</button></form>'
  );
});

// login => POST
router.post("/product", (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/");
});

module.exports = router;
