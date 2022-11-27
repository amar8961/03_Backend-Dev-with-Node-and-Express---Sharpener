const express = require("express");

// Import Router
const router = express.Router();

// Import homeControllers
const homeController = require("../controllers/homecontrollers");

router.get("/", homeController.getHome);

module.exports = router;
