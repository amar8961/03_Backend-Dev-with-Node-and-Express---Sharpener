// const path = require("path");

// const rootDir = require("../util/path");

const contactUsController = require("../controllers/contactus");

const express = require("express");

const router = express.Router();

router.get("/success", contactUsController.getSuccess);

module.exports = router;
