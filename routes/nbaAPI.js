const router = require('express').Router();
const { nbaAll } = require('../models/nba');

router.get('/', nbaAll, (req, res) => {
  res.json(res.data);
});

module.exports = router;