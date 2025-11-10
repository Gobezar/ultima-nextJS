// backend/db/knex.ts

// Используем импорт ES Modules
import knexLib, { Knex } from 'knex'; 
import path from 'path';

let knex: Knex; // Явно объявляем тип Knex

if (process.env.VERCEL_ENV === 'production') {
  // Конфигурация для Vercel (Production)
  knex = knexLib({
    client: 'pg', // Используем PostgreSQL
    connection: process.env.POSTGRES_URL, 
    useNullAsDefault: true,
  });
} else {
  // Конфигурация для локальной разработки (SQLite)
  const dbPath = path.join(__dirname, 'reviews.sqlite');
  knex = knexLib({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true,
  });
}

export default knex; // Используем TS-экспорт