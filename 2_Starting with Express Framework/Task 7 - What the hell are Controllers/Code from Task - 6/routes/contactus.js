// const path = require("path");

// const rootDir = require("../util/path");

const express = require("express");

const contactUsController = require("../controllers/contactus");

const router = express.Router();

router.get("/contactus", contactUsController.getContactUs);

router.post("/success", contactUsController.postContactUs);

module.exports = router;
