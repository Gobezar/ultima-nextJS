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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ultima-detailing.ru',
          },
        ],
        // Перенаправляем на основной домен с сохранением пути
        destination: 'https://ultima-detailing.ru/:path*',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;
