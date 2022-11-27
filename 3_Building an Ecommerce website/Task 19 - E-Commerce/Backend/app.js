// Express and nodemon installed
const express = require("express");

const app = express();

// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// User able to access 'public' folder
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// ejs view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import admin route
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// Import shop route
const shopRoutes = require('./routes/shop');
app.use(shopRoutes);

// Error Page
const errorController = require('./controllers/error');
app.use(errorController.get404);

// with this users should be able to access 'public' path // it will take any request that tries to find some file.
app.use(express.static(path.join(__dirname, "public")));

// Server
app.listen(4000);
