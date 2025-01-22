const http = require('http');
// creation of http
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
// server in 1245
app.listen(1245);
// export the server
module.exports = app;
