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
  console.log(req.body);
  db.none('UPDATE players SET name = $1, team = $2, age = $3, games = $4, points = $5 WHERE id = $6',
          [req.body.player.name, req.body.player.team, req.body.player.age, req.body.player.games, req.body.player.points, req.body.player.id])
    .then((data) => {
      console.log(data);
      next();
    });
};

module.exports = {
  nbaAll,
  nbaOne,
  nbaEdit
}