/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['vintex'],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
