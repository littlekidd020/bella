/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // Use memory cache instead of disabling it to prevent file locks (Google Drive) while keeping RSC working
      config.cache = { type: 'memory' };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;