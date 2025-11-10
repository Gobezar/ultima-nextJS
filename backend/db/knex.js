// const path = require('path');
// const knexLib = require('knex');

// const dbPath = path.join(__dirname, 'reviews.sqlite');

// const knex = knexLib({
//   client: 'sqlite3',
//   connection: {
//     filename: dbPath,
//   },
//   useNullAsDefault: true,
// });

// module.exports = knex;

// backend/db/knex.js
const knexLib = require('knex');
const path = require('path');

let knex;

if (process.env.VERCEL_ENV === 'production') {
  // Конфигурация для Vercel (Production)
  knex = knexLib({
    client: 'pg', // Используем PostgreSQL
    connection: process.env.POSTGRES_URL, // Берем из Vercel Environment Variables
    useNullAsDefault: true,
  });
} else {
  // Твоя старая конфигурация для локальной разработки
  const dbPath = path.join(__dirname, 'reviews.sqlite');
  knex = knexLib({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true,
  });
}

module.exports = knex;