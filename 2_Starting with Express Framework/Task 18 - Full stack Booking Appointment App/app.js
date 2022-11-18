// Express and nodemon installed
const express = require("express");

const app = express();

// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: false }));

const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

// with this users should be able to access 'public' path // it will take any request that tries to find some file.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// It allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
var cors = require("cors");
app.use(cors());

// error -> Adding a 404 Error Page
const errorController = require("./controllers/error");
app.use(errorController.get404);

// Using sequelize database
const sequelize = require("./util/database");
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
