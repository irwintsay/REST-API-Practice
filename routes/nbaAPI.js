const router = require('express').Router();
const { nbaAll,
        nbaOne,
        nbaEdit } = require('../models/nba');


router.get('/', nbaAll, (req, res) => {
  res.json(res.data);
});

router.get('/:id', nbaOne, (req, res) => {
  res.json(res.data);
});

router.put('/:id', nbaEdit, (req, res) => {
  console.log('Put Route hit');
  res.redirect('../../');
});

module.exports = router;