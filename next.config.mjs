

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT
  },
};
export default nextConfig;

