/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "13.53.197.245", "ec2-13-53-197-245.eu-north-1.compute.amazonaws.com"],
  },
};

export default nextConfig;
