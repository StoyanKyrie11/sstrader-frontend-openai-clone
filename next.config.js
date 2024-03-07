
/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.datocms-assets.com",
                pathname: "*/**",
                port: '',
            },
        ],
    },
};

module.exports = withVideos(nextConfig);