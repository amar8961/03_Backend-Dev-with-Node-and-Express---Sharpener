// The Path module provides a way of working with directories and file paths.
const path = require("path");

const rootDir = require("../util/path");

exports.getHome = (req, res, next) => {
  console.log("GOT IT");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};

// Import models
const Booking = require("../models/homemodels");

exports.addData = async (req, res, next) => {
  try {
    if (!req.body.phone) {
      throw new Error("Phone number is mandatory");
    }
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const data = await Booking.create({
      name: name,
      email: email,
      phone: phone,
    });
    res.status(201).json({ newBookingDetails: data }); // The HTTP 201 Created success status response code
    console.log("DATA ADDED");
    res.redirect("/");
  } catch (err) {
    console.log("ERROR");
    // HTTP 500 Internal Server Error server error response code.
    res.status(500).json({
      error: err,
    });
  }
};
