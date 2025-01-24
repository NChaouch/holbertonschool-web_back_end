const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } 
  
  if (req.url === '/students') {
    const dbPath = process.argv[2];
    
    res.write('This is the list of our students\n');
    
    countStudents(dbPath)
      .then(() => res.end())
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
