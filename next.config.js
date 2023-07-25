/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com'
        ]
    },
    env: {
        backend_url: "https://nspgvh-5000.csb.app"
    }
}


module.exports = nextConfig
