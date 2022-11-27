// Express and nodemon installed
const express = require("express");

const app = express();

// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

// with this users should be able to access 'public' path // it will take any request that tries to find some file.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.listen(4000);
