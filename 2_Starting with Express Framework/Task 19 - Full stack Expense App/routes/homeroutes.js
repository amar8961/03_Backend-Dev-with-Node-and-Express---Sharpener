// using Express
const express = require("express");
const router = express.Router();

// import home controllers
const homeController = require("../controllers/homecontrollers");

// create route for home ('/') page.
router.get("/", homeController.getHome);

// create route for add data.
router.post('/add', homeController.addData)

module.exports = router;
