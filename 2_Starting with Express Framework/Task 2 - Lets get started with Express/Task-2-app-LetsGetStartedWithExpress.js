//  *** Using the Node Modules System ***
const http = require('http');

const routes = require('./Task-2-routes-LetsGetStartedWithExpress')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);