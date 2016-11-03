const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('nba/index');
});

module.exports = router;