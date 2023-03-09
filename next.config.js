/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2fap8ni6v2bu4.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2fap8ni6v2bu4.cloudfront.net',
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
