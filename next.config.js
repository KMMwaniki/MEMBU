/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["localhost", "v0.blob.com"], // Added v0.blob.com to allow using the provided image URLs
    },
  }
  
  module.exports = nextConfig
  
  