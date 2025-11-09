const path = require('path');
const knexLib = require('knex');

const dbPath = path.join(__dirname, 'reviews.sqlite');

const knex = knexLib({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

module.exports = knex;
