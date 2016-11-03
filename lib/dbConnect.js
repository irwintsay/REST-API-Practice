const pgp         = require('pg-promise')();
const connection  = 'postgres://localhost:5432/nba_db';
const db          = pgp(connection);

module.exports = db;