import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(process.cwd(), 'src/app/components'),
    };
    return config;
  },
};

export default nextConfig;
