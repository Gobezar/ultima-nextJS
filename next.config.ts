import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push(
      'better-sqlite3',
      'mysql',
      'mysql2',
      'oracledb',
      'pg-query-stream',
      'tedious',
      'mssql'
    );

    return config;
  },
};

export default nextConfig;
