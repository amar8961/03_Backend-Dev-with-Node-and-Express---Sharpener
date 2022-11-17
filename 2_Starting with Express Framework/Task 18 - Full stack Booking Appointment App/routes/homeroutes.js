const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homecontrollers");

router.get("/", homeController.getHome);

module.exports = router;
