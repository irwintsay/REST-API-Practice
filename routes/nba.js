const NBARouter = require('express').Router();

NBARouter.get('/', (req, res) => {
  res.render('nba/index');
});

NBARouter.get('/:id', (req, res) => {
  res.render('nba/show', {
    id: req.params.id
  });
});

module.exports = NBARouter;