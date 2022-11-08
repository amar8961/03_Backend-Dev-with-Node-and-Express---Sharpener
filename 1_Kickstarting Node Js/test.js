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
      res.write('<head><title>My First Page</title></head>')
      res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
      res.write('</html>')
      res.end()
    }
});
server.listen(3000);