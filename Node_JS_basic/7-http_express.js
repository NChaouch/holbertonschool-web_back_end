const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];
  try {
    res.write('This is the list of our students\n');
    await countStudents(dbPath);
    res.end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port);

module.exports = app;
