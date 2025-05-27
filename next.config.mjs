/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname:"imgs.search.brave.com"
      }
    ]
  }
};

export default nextConfig;
