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
    ],
  },
};

export default nextConfig;
