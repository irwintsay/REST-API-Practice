const router = require('express').Router();
const { nbaAll,
        nbaOne,
        nbaEdit,
        nbaDelete } = require('../models/nba');


router.get('/', nbaAll, (req, res) => {
  console.log('All API Route');
  res.json(res.data);
});

router.get('/:id', nbaOne, (req, res) => {
  console.log('One API Route');
  res.json(res.data);
});

router.put('/:id', nbaEdit, (req, res) => {
  console.log('Put API Route');
  res.redirect('/nba/' + req.params.id);
});

router.delete('/:id', nbaDelete, (req, res) => {
  console.log('Delete API Route');
  res.redirect('/');
});

module.exports = router;