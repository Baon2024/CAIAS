

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Enables App Router
    },
    images: {
      domains: ['localhost'], // Allow images from localhost
    },
  };
  
  export default nextConfig;
  