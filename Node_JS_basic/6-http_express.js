const express = require('express');
// Creation of the application express
const app = express();
// endpoint with root
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
