const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Mesage</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
    // return because this is not require to return a response but to return a anonymous function and to not continue with next code. it will quit the function execution.
  }
  if (url === "/message" && method === "POST") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server !</h1></body>");
    res.write("</html>");
    return res.end(); // return because we don't want to execute next code.
  }
  console.log(req.url, req.method, req.headers);
  // process.exit(); -> to quit the server
  res.setHeader("Content-Type", "text/html");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server !</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
