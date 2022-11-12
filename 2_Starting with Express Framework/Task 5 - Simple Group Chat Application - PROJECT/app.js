const express = require("express");

const app = express();

//  *** Using Express Router ***
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // with this we get product details in TERMINAL as Key : Value

const userRoutes = require("./routes/login"); // Create user route
const homeRoutes = require("./routes/home");

app.use(userRoutes); // *** Filtering Paths ***  // use user route
app.use(homeRoutes);

// *** Adding a 404 Error Page ***
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>"); // 404 code for Page not found.
});

//  *** Express js Looking Behind the Scenes ***
app.listen(3000);
