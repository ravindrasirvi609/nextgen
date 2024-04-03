/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    domains: ["unsplash.com", "images.unsplash.com", "aceternity.com", "res.cloudinary.com", "cdn.pixabay.com", "cdn.dribbble.com", "cdn.fakercloud.com", "cdn.iconscout"],
  },
};

export default nextConfig;
