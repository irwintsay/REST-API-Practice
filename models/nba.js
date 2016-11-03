const db = require('../lib/dbConnect.js');

const getAll = (req, res, next) => {
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

module.exports = {
  getAll
}