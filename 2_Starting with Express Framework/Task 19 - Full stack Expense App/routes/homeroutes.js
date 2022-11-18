// using Express
const express = require("express");
const router = express.Router();

// import home controllers
const homeController = require("../controllers/homecontrollers");

// create route for home ('/') page.
router.get("/", homeController.getHome);

// create route for add data.
router.post("/add", homeController.addData);

// create route for get data from database
router.get("/get-data", homeController.getData);

// create route for delete data from database
router.delete("/delete-data/:id", homeController.deleteData);

// create route for edit data from database
router.delete("/edit-data/:id", homeController.editData);

module.exports = router;
