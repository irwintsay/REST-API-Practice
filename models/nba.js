const db = require('../lib/dbConnect.js');


// Get all NBA players
const nbaAll = (req, res, next) => {
  db.any('SELECT * FROM players')
    .then((data) => {
      console.log('Retrieved all successfully');
      res.data = data;
      next();
    })
    .catch((error) => {
      next(error);
    });
};

// Get one NBA player by id
const nbaOne = (req, res, next) => {
  
  db.one('SELECT * FROM players WHERE id = $1', [req.params.id])
    .then((data) => {
      console.log('Retrieved 1 player successfully');
      res.data = data;
      next();
    })
    .catch((error) => {
      next(error);
    });
};

// Edit one NBA player by id
const nbaEdit = (req, res, next) => {
  // Edit player service
  console.log('Edit Service');
  console.log(req.body.player);
  db.none('UPDATE players SET name = $1, team = $2, age = $3, games = $4, points = $5 WHERE id = $6',
          [req.body.player.name, req.body.player.team, req.body.player.age, req.body.player.games, req.body.player.points, req.params.id])
    .then(() => {
      next();
    });
};

// Delete one NBA player by id
const nbaDelete = (req, res, next) => {
  console.log('Delete Service');
  db.none('DELETE FROM players WHERE id = $1', [req.params.id])
    .then(() => {
      next();
    });
};

// Export stuff
module.exports = {
  nbaAll,
  nbaOne,
  nbaEdit,
  nbaDelete
}