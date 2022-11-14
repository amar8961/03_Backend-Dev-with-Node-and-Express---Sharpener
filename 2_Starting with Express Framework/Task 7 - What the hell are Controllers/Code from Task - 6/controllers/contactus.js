const path = require("path");

const rootDir = require("../util/path");

exports.getContactUs = (req, res, next) => {
  console.log("In contactus middleware!");
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactUs = (req, res, next) => {
  // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj); // { title: 'product' }
  res.redirect("/success");
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
