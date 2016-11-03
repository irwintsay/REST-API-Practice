const express           = require('express');
const logger            = require('morgan');
const path              = require('path');
const indexRouter       = require('./routes/index');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname + 'public')));

// Routing
app.use('/', indexRouter);

app.listen(port, (req, res) => {
  console.log('Power level over:', port);
});
