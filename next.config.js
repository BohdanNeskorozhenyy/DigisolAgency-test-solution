/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['stevensegallery.com', 'www.fillmurray.com'],
  },
};

module.exports = nextConfig;
