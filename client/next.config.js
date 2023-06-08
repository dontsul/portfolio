/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-server-ashen-nine.vercel.app',
        // port: '3002',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
