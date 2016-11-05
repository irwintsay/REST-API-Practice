const router = require('express').Router();
const { nbaAll,
        nbaOne } = require('../models/nba');


router.get('/', nbaAll, (req, res) => {
  res.json(res.data);
});

router.get('/:id', nbaOne, (req, res) => {
  res.json(res.data);
});

router.put('/:id/edit', nbaEdit, (req, res) => {
  res.redirect('/nba/' + req.params.id);
});

module.exports = router;