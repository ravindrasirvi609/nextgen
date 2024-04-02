/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    domains: ["unsplash.com", "images.unsplash.com", "aceternity.com"],
  },
};

export default nextConfig;
