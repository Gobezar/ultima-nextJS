import dns from 'node:dns';
import { Pool } from 'pg';

// На Windows Node часто идёт в Neon по IPv6 и получает EACCES
dns.setDefaultResultOrder('ipv4first');

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error(
    'POSTGRES_URL is not set. Add it to .env.local (Neon Console → Connect).'
  );
}

const globalForPg = global as unknown as { pgPool: Pool };

export const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pgPool = pool;