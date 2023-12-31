/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images:{
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "images.pexels.com",
            "img.freepik.com",
        ],
    },
};

module.exports = nextConfig