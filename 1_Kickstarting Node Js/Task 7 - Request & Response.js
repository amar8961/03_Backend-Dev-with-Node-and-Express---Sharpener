// //  *** Understanding Requests ***
// const http = require("http");
// const server2 = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   // process.exit(); -> to quit the server
// });
// server2.listen(3000);


//  *** Sending Responses ***
const http = require("http");
const server3 = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); -> to quit the server
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
  res.write('</html>')
  res.end()
});
server3.listen(3000);


