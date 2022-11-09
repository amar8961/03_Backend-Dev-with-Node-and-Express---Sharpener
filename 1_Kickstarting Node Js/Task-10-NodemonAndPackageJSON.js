//  *** Using the Node Modules System ***
const http = require('http');

const routes = require('./Task 10 - routes - Nodemon and Package JSON')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);