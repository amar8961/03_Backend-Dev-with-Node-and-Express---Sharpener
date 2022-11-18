// using Express
const express = require("express");
const app = express();

// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: false }));

// route for home page
const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

// with this users should be able to access 'public' path // it will take any request that tries to find some file.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// to bind and listen the connections on the specified host and port.
app.listen(5000);
