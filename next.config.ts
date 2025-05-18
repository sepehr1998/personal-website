const nextConfig: import('next').NextConfig = {
    trailingSlash: false,
    images: {
        unoptimized: false, // Let Vercel handle image optimization
    },
};

module.exports = nextConfig;
