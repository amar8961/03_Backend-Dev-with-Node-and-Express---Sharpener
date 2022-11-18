// using Express
const express = require("express");
const router = express.Router();

// import home controllers
const homeController = require("../controllers/homecontrollers");

// create route for home ('/) page.
router.get("/", homeController.getHome);

module.exports = router;
