// Express and nodemon installed
const express = require("express");

const app = express();

// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

app.listen(4000);
