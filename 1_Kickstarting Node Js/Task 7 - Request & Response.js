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


// //  *** Redirecting Requests ***
// const http = require("http");
// const fs = require('fs');  // import 'fs' core module

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Mesage</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>')
//         return res.end();
//         // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
//     }
//     if(url === '/message' && method === 'POST'){
//       fs.writeFileSync('Task 7 - message(Redirecting Requests).text', 'DUMMY')  // it wil create a 'Task 7 - message(Redirecting Requests).text' file after submit in current directory.
//       res.statusCode = 302; // The 302 status code is a redirection message that occurs when a resource or page you're attempting to load has been temporarily moved to a different location.
//       res.setHeader('Location', '/')
//       return res.end(); // return because we don't want to execute next code.
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


// //  *** Parsing Request Bodies ***
// const http = require("http");
// const fs = require('fs');  // import 'fs' core module

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Mesage</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>')
//         return res.end();
//         // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
//     }
//     if(url === '/message' && method === 'POST'){
//       const body = [];
//       req.on('data', (chunk) => {
//         // The 'on()' method requires name of the event to handle and callback function which is called when an event is raised.
//         console.log(chunk)
//         body.push(chunk);
//       });
//       req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString()
//         // * The 'Buffer' class in Node. js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, 
//         // but aren't resizable and have a whole bunch of methods specifically for binary data.
//         // * The 'concat()' method concatenates the string arguments to the calling string and returns a new string.
//         // * The 'toString()' method returns the buffer object according to the specified encoding.
//         const message = parsedBody.split('=')[1];
//         console.log(parsedBody)
//         fs.writeFileSync('Task 7 - message(Parsing Request Bodies).text', message)  // it wil create a 'Task 7 - message(Redirecting Requests).text' file after submit in current directory.
//       })
//       res.statusCode = 302; 
//       res.setHeader('Location', '/')
//       return res.end(); 
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


// //  *** Understanding Event Driven Code Execution ***
// const http = require("http");
// const fs = require('fs');  // import 'fs' core module

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Mesage</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>')
//         return res.end();
//     }
//     if(url === '/message' && method === 'POST'){
//       const body = [];
//       req.on('data', (chunk) => {
//         console.log(chunk)
//         body.push(chunk);
//       });
//       req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString()
//         const message = parsedBody.split('=')[1];
//         console.log(parsedBody)
//         fs.writeFileSync('Task 7 - message(Understanding Event Driven Code Execution).text', message)
//         res.statusCode = 302; 
//         res.setHeader('Location', '/')
//         return res.end();   
//       })
//     }
//   console.log(req.url, req.method, req.headers);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);


//  *** Task Question ***
// // 1)
// const http = require("http");
// const fs = require('fs');  // import 'fs' core module

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Mesage</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>')
//         return res.end();
//     }
//     if(url === '/message' && method === 'POST'){
//       const body = [];
//       req.on('data', (chunk) => {
//         console.log(chunk)
//         body.push(chunk);
//       });
//       req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString()
//         const message = parsedBody.split('=')[1];
//         console.log(parsedBody)
//         fs.writeFileSync('Task 7 - message(Understanding Event Driven Code Execution).text', message)
//         res.statusCode = 302; 
//         res.setHeader('Location', '/')
//         return res.end();   
//       })
//     }
//   console.log(req.url, req.method, req.headers);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);

// 2)
const http = require("http");
const fs = require('fs');  // import 'fs' core module

const server = http.createServer((req, res) => {
  // req = request , res = response
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Mesage</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('<body><nav><a href="/home">Home</a> <a href="/about">About</a><br><a href="/node">Node</a></nav></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message'){
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1];
        console.log(parsedBody)
        fs.writeFileSync('Task 7 - message(Understanding Event Driven Code Execution).text', message)
        res.statusCode = 302; 
        res.setHeader('Location', '/')
        return res.end();   
      })
    } else if(url === '/home'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<head><title>Welcome to About Us page</title></head>')
      res.write('<body><h1>Welcome home</h1></body>')
      res.write('</html>')
      return res.end();  // we have to return to keep server running otherwise server stop working.
    } else if(url === '/about'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<head><title>Welcome to About Us page</title></head>')
      res.write('<body><h1>Welcome to About Us page</h1></body>')
      res.write('</html>')
      return res.end()
    } else if(url === '/node'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<head><title>My First Page</title></head>')
      res.write('<body><h1>Welcome to my Node Js project</h1></body>')
      res.write('</html>')
      return res.end()
    }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Welcome to my Node Js project</h1></body>')
  res.write('</html>')
  res.end()
  
});
server.listen(3000);