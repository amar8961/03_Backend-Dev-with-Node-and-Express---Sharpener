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
//       req.on('end', () => {
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
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
//   res.write('</html>')
//   res.end()
// });
// server.listen(3000);


//  *** Task Question ***
// redirects too with 302 response.
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
      fs.writeFileSync('Task 8 - message(Task Question).text', 'DUMMY')  // it wil create a 'Task 8 - message(Task Question).text' file after submit in current directory.
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
