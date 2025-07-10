/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'admin.yonescat.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost', 
      },
    ]
  }
  
};

export default nextConfig;
