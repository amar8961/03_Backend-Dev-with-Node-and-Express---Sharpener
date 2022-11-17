const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homecontrollers");

router.get("/", homeController.getHome);

router.post("/add", homeController.addData);

module.exports = router;
