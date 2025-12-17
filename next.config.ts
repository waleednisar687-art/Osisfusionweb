/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://webmail.oasisfusionservices.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
