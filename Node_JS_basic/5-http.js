const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  } if (req.url === '/students') {
    const dbPath = process.argv[2];

    if (!dbPath) {
      res.statusCode = 500;
      res.end('Database path is required');
      return;
    }

    res.write('This is the list of our students\n');

    countStudents(dbPath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });

    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

module.exports = app;

