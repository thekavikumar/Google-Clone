/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.google.co.uk", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
