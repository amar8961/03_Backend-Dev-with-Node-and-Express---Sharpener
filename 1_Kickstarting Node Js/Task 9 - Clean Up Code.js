//  *** Using the Node Modules System ***
const http = require('http');

const routes = require('./Task 9 - routes - Clean Up Code')

const server = http.createServer(routes);

server.listen(3000);