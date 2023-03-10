/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2fap8ni6v2bu4.cloudfront.net'],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = withPlaiceholder(nextConfig);
