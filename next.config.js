/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Other Next.js configurations
  };
  
  async function getConfig() {
    const { default: sitemapConfig } = await import('./next-sitemap.js');
    return {
      ...nextConfig,
      sitemap: sitemapConfig,
    };
  }
  
  module.exports = getConfig();
  