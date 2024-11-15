/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.hismailkeskin.net",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3093",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
