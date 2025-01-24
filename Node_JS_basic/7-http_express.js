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
    let responseText = 'This is the list of our students\n';
    const studentsData = await countStudents(dbPath);
    responseText += studentsData;
    res.send(responseText);
  } catch (error) {
    res.status(500).send(`Cannot load the database: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
