const http = require('http');
const countStudents = require('./3-read_file_async');
// Creation of server htpp
const app = http.createServer((req, res) => {
  // content in file
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    const dbPath = process.argv[2];
    // compare and display students
    countStudents(dbPath)
    // end response if success
      .then(() => res.end())
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
