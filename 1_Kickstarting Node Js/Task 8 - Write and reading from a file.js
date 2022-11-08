// //  *** Blocking and Non Blocking Code ***
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
//       return req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString()
//         const message = parsedBody.split('=')[1];
//         // // with 'writeFileSync' the next line and all other code will not continue to run until that file operation is done.
//         // fs.writeFileSync('Task 8 - message(Blocking and Non Blocking Code).text', message)
//         fs.writeFile('Task 8 - message(Blocking and Non Blocking Code).text', message, err => {
//             res.statusCode = 302; 
//             res.setHeader('Location', '/')
//             return res.end();
//         })
//       })
//     }
//   console.log(req.url, req.method, req.headers);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);


// //  *** Redirecting Requests *** from Task - 7 *** Task Question is similar to this.
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
//   res.write('<html>')
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);


// //  *** Parsing Request Bodies *** from Task - 7 *** Task Question is similar to this.
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
//   res.write('<html>')
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);



//  *** Task Question ***
// // redirects too with 302 response.
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
//       fs.writeFileSync('Task 8 - message(Task Question).text', 'DUMMY')  // it wil create a 'Task 8 - message(Task Question).text' file after submit in current directory.
//       res.statusCode = 302; // The 302 status code is a redirection message that occurs when a resource or page you're attempting to load has been temporarily moved to a different location.
//       res.setHeader('Location', '/')
//       return res.end(); // return because we don't want to execute next code.
//     }
//   console.log(req.url, req.method, req.headers);
//   // process.exit(); -> to quit the server
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);

// // Another way ->
// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {
//     url = req.url;
//     res.setHeader("Content-Type", "text/html");
//     if (url == "/") {
//       res.write("<html>");
//       res.write("<head><title> home</title></head>");
//       res.write("<body>");
//       res.write(
//         '<form action="/message" method="POST" type="text"><input type="text" name="message" ></input><button type="submit">submit</button></form>'
//       );
//       res.write("</body>");
//       res.write("</head>");
//       return res.end();
//     }
//     if (url == "/message" && req.method == "POST") {
//       const body = [];
//       req.on("data", (chunk) => {
//         console.log(chunk);
//         body.push(chunk);
//       });
//       req.on("end", () => {
//         const parseBody = Buffer.concat(body).toString();
//         const message = parseBody.split("=")[1];
//         fs.writeFileSync("message.txt", message);
//         res.statusCode = 302;
//         res.setHeader("Location", "/");

//         return res.end();
//       });
//     }
//   })
//   .listen(3000);


//  *** Task - 8 *** Project ***
const http = require("http");
const fs = require('fs');  // import 'fs' core module

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
      fs.readFile("Task 8 - message(Project).text", { encoding: "utf-8" }, (err, data) => {
        if(err){
          console.log(err)
        }
        console.log(`data from file` + data);
        res.write('<html>')
        res.write('<head><title>Enter Mesage</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
        // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
      })
    }else if(url === '/message' && method === 'POST'){
      const body = [];
      req.on('data', (chunk) => {
        // The 'on()' method requires name of the event to handle and callback function which is called when an event is raised.
        console.log(chunk)
        body.push(chunk);  // array
      });

      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        // * In Node Js, 'Buffers' are used to store raw binary data. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.
        // * The 'concat()' method concatenates the string arguments to the calling string and returns a new string.
        // * The 'toString()' method returns the buffer object according to the specified encoding.
        console.log('parsedBody -> ' + parsedBody);
        const message = parsedBody.split('=')[1];
        // it wil create a 'Task 8 - message(Project).text' file after submit in current directory.
        fs.writeFile('Task 8 - message(Project).text', message, (err) => {
          if(err){
            console.log(err)
          }
          res.statusCode = 302; 
          res.setHeader('Location', '/')
          return res.end(); 
        })  
      })
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>')
      res.write('<head><title>My First Page</title></head>')
      res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
      res.write('</html>')
      res.end()
    }
});
server.listen(3000);
