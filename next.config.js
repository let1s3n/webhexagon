/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2fap8ni6v2bu4.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
