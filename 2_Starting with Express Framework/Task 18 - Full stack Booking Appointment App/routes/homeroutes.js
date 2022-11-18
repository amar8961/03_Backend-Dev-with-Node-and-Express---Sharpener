const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homecontrollers");

router.get("/", homeController.getHome);

router.post("/add", homeController.addData);

router.get("/get-data", homeController.getData);

module.exports = router;
