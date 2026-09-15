/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure allowed image domains (add as needed)
  images: {
    domains: [
      'avatars.githubusercontent.com', // GitHub avatars
    ],
  },

  // Environment variables available in the browser
  // (only NEXT_PUBLIC_ prefixed vars are exposed to the client)
};

module.exports = nextConfig;
