const homeRouter = require('express').Router();

homeRouter.get('/', (req, res) => {
  res.render('home/index');
});

homeRouter.get('/show', (req, res) => {
  res.render('home/show');
});

module.exports = homeRouter;

