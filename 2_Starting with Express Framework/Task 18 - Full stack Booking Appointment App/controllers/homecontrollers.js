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
    // newBookingDetails -> send data to frontend
    res.status(201).json({ newBookingDetails: data }); // The HTTP 201 Created success status response code
    // res.sendFile(path.join(rootDir, "views", "home.html"));
  } catch (err) {
    console.log("ERROR");
    // HTTP 500 Internal Server Error server error response code.
    res.status(500).json({
      error: err,
    });
  }
};

exports.getData = async (req, res, next) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json({ allBookings: booking });  // allBookings -> send data to frontend
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
  // const data = await Booking.findAll();
  // res.status(200).json({ allBookings: data });
};

exports.deleteData = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("ID IS MISSING");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    // destroy method for deleting data.
    await Booking.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
