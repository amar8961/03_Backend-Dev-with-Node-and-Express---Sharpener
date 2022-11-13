const express = require("express");

const router = express.Router();

const fs = require("fs");

// const data = require("./data");

// home => GET
router.get("/", (req, res, next) => {
  console.log("In another middleware!");
  fs.readFile("chat.text", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat Exists";
    }
    res.send(
      `${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
      <input id="message" name="message" type="text" placeholder="message">
      <input id="username" name="username" type="hidden">
      <button type="submit">Send</button></form>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.message);
  // { flag: "a" } -> to store old data
  fs.writeFile(
    "chat.text",
    `${req.body.username} : ${req.body.message} , `,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
  // data.push(`{${req.body.username}:${req.body.message}}`);
  // console.log(data);
  // console.log(`{${req.body.username}:${req.body.message}}`);
  // res.redirect("/");
});

module.exports = router;
