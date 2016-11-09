const express           = require('express');
const bodyParser        = require('body-parser');
const logger            = require('morgan');
const methodOverride    = require('method-override');
const path              = require('path');

const app               = express();
const port              = process.env.PORT || 8000;
const indexRouter       = require('./routes/index');
const nbaRouter         = require('./routes/nba');
const nbaAPIRouter      = require('./routes/nbaAPI');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', indexRouter);
app.use('/nba', nbaRouter);
app.use('/api/nba', nbaAPIRouter);


// ===== For Review Session =====

const homeRouter = require('./routes/home');
app.use('/home', homeRouter);

// ==============================


app.listen(port, (req, res) => {
  console.log('Power level over:', port);
});
