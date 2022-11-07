const http = require("http");
const server2 = http.createServer((req, res) => {
  console.log('Amar');
  // process.exit(); -> to quit the server
});
server2.listen(4000);