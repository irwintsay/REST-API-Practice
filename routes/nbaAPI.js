const router = require('express').Router();
const { nbaAll,
        nbaOne,
        nbaEdit,
        nbaDelete } = require('../models/nba');


router.get('/', nbaAll, (req, res) => {
  res.json(res.data);
});

router.get('/:id', nbaOne, (req, res) => {
  res.json(res.data);
});

router.put('/:id', nbaEdit, (req, res) => {
  console.log('Put Route hit');
  res.redirect('/nba/' + req.params.id);
});

router.delete('/:id', nbaDelete, (req, res) => {
  console.log('Delete Route hit');
  res.redirect('/');
});

module.exports = router;