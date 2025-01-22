const express = require('express');
const app = express();
// creation of http
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// server in 1245
app.listen(1245);
// export the server
module.exports = app;
