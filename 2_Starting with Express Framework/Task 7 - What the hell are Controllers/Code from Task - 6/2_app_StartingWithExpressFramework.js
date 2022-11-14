const express = require("express");

const path = require("path");

const app = express();

const error404 = require('./controllers/404')

//  *** Using Express Router ***
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // with this we get product details in TERMINAL as Key : Value
app.use(express.static(path.join(__dirname, "public"))); // with this users should be able to access 'public' path // it will take any request that tries to find some file.

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop"); // create shop route
const contactUsRoutes = require("./routes/contactus"); // create contact us route
const successRoutes = require("./routes/success"); // create success route

app.use("/admin", adminRoutes); // *** Filtering Paths ***
app.use(shopRoutes); // use shop route
app.use(contactUsRoutes); // use contact us route
app.use(successRoutes); // use success route

// *** Adding a 404 Error Page ***
app.use(error404.get404);

//  *** Express js Looking Behind the Scenes ***
app.listen(3000);
