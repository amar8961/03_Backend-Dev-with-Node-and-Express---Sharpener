//  *** Understanding Requests ***
const http = require("http");
const server2 = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); -> to quit the server
});
server2.listen(3000);


