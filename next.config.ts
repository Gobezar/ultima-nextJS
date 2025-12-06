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
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true, // 301
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
