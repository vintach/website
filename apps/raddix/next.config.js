/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docs/hooks/:slug',
        destination: '/hooks/:slug',
        permanent: true
      },
      {
        source: '/docs/getting-started/:slug',
        destination: '/guide/:slug',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
