const http = require("http");
const server3 = http.createServer((req, res) => {
  console.log('Amar');
  // process.exit(); -> to quit the server
});
server3.listen(4000);