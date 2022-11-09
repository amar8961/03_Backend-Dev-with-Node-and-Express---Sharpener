//  *** Using the Node Modules System ***
const http = require('http');

const routes = require('./Task 11 - routes - Debugging Techniques')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);