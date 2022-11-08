//  *** Blocking and Non Blocking Code ***
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
    }
    if(url === '/message' && method === 'POST'){
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1];
        // // with 'writeFileSync' the nex line and all other code will not continue to run until that file operation is done.
        // fs.writeFileSync('Task 8 - message(Blocking and Non Blocking Code).text', message)
        fs.writeFile('Task 8 - message(Blocking and Non Blocking Code).text', message, err => {
            res.statusCode = 302; 
            res.setHeader('Location', '/')
            return res.end();
        })
      })
    }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server !</h1></body>')
  res.write('</html>')
  res.end()
});
server.listen(3000);