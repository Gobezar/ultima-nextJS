import { Pool } from 'pg';

// Используем глобальную переменную для сохранения подключения в dev-режиме
const globalForPg = global as unknown as { pgPool: Pool };

export const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString: process.env.POSTGRES_URL, 
    ssl: {
      rejectUnauthorized: false, // Для Neon часто нужно это, или true, если есть сертификаты
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pgPool = pool;