const db = require('../lib/dbConnect.js');

const nbaAll = (req, res, next) => {
  db.any('SELECT * FROM players')
    .then((data) => {
      console.log('GOT DATA');
      res.data = data;
      next();
    })
    .catch((error) => {
      next(error);
    });
};

const nbaOne = (req, res, next) => {
  db.one('SELECT * FROM players WHERE id = $1', [req.params.id])
    .then((data) => {
      console.log(data);
      res.data = data;
      next();
    })
    .catch((error) => {
      next(error);
    });
};

const nbaEdit = (req, res, next) => {
  // Edit player service
}

module.exports = {
  nbaAll,
  nbaOne
}