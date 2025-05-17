import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    basePath: isProd ? '/personal-portfolio' : '',
    assetPrefix: isProd ? '/personal-portfolio/' : '',
};

export default nextConfig;
