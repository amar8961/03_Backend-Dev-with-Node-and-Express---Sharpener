const express = require("express");

const app = express();

// //  *** Adding Middleware ***
// // use allows us to add a new middleware function.
// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); //  Allows the request to continue to the next middleware in line.
// });

// //  *** How Middleware Works ***
// app.use((req, res, next) => {
//   console.log("In another middleware !");
//   res.send("<h1>Hello from Express !</h1>");
// });

// //  *** Handling Different Routes ***
// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log("In another middleware!");
//   res.send('<h1>The "Add Product" Page</h1>');
// });

// app.use("/", (req, res, next) => {
//   console.log("In another middleware!");
//   res.send("<h1>Hello from Express !</h1>");
// });

//  *** Using Express Router ***
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // with this we get product details in TERMINAL as Key : Value

const adminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(ShopRoutes);

//  *** Express js Looking Behind the Scenes ***
app.listen(3000);
