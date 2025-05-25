/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://shiny-robot-r5vxpgjvx9rcxqjv-8000.app.github.dev/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
