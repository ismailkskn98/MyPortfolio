/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost",
      "api.hismailkeskin.net",
      "www.api.hismailkeskin.net",
      "https://api.hismailkeskin.net",
      "https://www.api.hismailkeskin.net",
    ],
  },
};

export default nextConfig;
