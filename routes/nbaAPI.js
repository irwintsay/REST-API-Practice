const router = require('express').Router();
const { nbaAll,
        nbaOne } = require('../models/nba');


router.get('/', nbaAll, (req, res) => {
  res.json(res.data);
});

router.get('/:id', nbaOne, (req, res) => {
  res.json(res.data);
});

module.exports = router;