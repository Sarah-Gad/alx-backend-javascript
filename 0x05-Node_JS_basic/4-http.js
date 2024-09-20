// This module creates an http server
const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});
app.listen(1245);
