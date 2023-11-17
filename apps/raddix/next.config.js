/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: '/hooks/:slug',
        destination: '/docs/hooks/:slug',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
