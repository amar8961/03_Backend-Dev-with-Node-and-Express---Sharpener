// //  *** Understanding Requests ***
// const http = require("http");
// const server2 = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   // process.exit(); -> to quit the server
// });
// server2.listen(3000);


// //  *** Sending Responses ***
// const http = require("http");
// const server3 = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   // process.exit(); -> to quit the server
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server3.listen(3000);


// //  *** Routing Requests ***
// const http = require("http");
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if(url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Mesage</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Submit</button></form></body>')
//         res.write('</html>')
//         return res.end();
//         // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
//     }
//   console.log(req.url, req.method, req.headers);
//   // process.exit(); -> to quit the server
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);
// // after submit from dom it goes to ('/message') and ('/message') does not make it into this if statement therefore next code run.


//  *** Redirecting Requests ***
const http = require("http");
const fs = require('fs');  // import 'fs' core module

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Mesage</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
        // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
    }
    if(url === '/message' && method === 'POST'){
      fs.writeFileSync('Task 7 - message(Redirecting Requests).text', 'DUMMY')  // it wil create a 'Task 7 - message(Redirecting Requests).text' file after submit in current directory.
      res.statusCode = 302; // The 302 status code is a redirection message that occurs when a resource or page you're attempting to load has been temporarily moved to a different location.
      res.setHeader('Location', '/')
      return res.end(); // return because we don't want to execute next code.
    }
  console.log(req.url, req.method, req.headers);
  // process.exit(); -> to quit the server
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
  res.write('</html>')
  res.end()
});
server.listen(3000);


