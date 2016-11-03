const express           = require('express');
const logger            = require('morgan');
const path              = require('path');

const app               = express();
const port              = process.env.PORT || 8000;
const indexRouter       = require('./routes/index');
const nbaRouter         = require('./routes/nba');
const nbaAPIRouter      = require('./routes/nbaAPI');

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', indexRouter);
app.use('/nba', nbaRouter);
app.use('/api/nba', nbaAPIRouter);

app.listen(port, (req, res) => {
  console.log('Power level over:', port);
});
