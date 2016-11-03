const router = require('express').Router();
const { getAll } = require('../models/nba');

router.get('/', getAll, (req, res) => {
  res.json(res.data);
});

module.exports = router;