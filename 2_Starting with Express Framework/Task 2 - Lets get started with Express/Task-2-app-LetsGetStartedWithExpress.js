//  *** Using the Node Modules System ***
const http = require("http");

const express = require("express");

const app = express();

// use allows us to add a new middleware function.
app.use((req, res, next) => {
    console.log('In the middleware!')
    next()  //  Allows the request to continue to the next middleware in line.
})

const server = http.createServer(app);

server.listen(3000);
