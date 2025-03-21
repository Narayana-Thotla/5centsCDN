import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.pixabay.com','img.freepik.com','cdn.pixabay.com','www.shutterstock.com'],
  }, 
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during Vercel deployment
  },
};

export default nextConfig;
