const path = require("path");

const rootDir = require("../util/path");

exports.getProduct = (req, res, next) => {
  console.log("In another middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postProduct = (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
