const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 8000;
app.use(logger('dev'));
app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, (req, res) => {
  console.log('Listening to port: ', port);
});
