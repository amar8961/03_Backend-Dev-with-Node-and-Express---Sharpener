// Creating a Node Server
// 1
const http = require("http");
function rqListener(req, res) {
  // code
}
http.createServer(rqListener);

// 2
// function without any name called anonymous functions.
const http = require("http");
http.createServer(function (req, res) {
  // code
});

// 3
const http = require("http");
http.createServer((req, res) => {
  console.log(req);
});

// 4
// this creates a loop
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
});
server.listen(3000);

// The Node Lifecycle & Event Loop
const http = require("http");
const server2 = http.createServer((req, res) => {
  console.log(req);
  process.exit();
  // process.exit(); -> to quit the server
});
server2.listen(3000);
