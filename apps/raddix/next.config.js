/** @type {import('next').NextConfig} */
const nextConfig = {
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
