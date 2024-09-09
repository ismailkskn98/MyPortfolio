import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-bg": "url('/images/about/bg.svg')",
        "skills-bg": "url('/images/skills/skills-bg.webp')",
        "works-bg": "url('/images/works/works-bg.webp')",
        "login-left-bg": "url('/images/login/login-left-bg.svg')",
        "login-right-bg": "url('/images/login/login-right-bg.svg')",
        "login-right-bg-mobil": "url('/images/login/login-right-bg-mobil.svg')",
        "login-h1": "url('/images/login/login-h1.svg')",
      },
    },
    colors: {
      BG1: "#292F36",
      BG2: "#1A1E23",
      Brand1: "#12F7D6",
      Brand2: "#98FAEC",
      Grey: "#43454D",
      White: "#FFFFFF",
      Html: "#E54F26",
      CSS: "#0C73B8",
      JS: "#E7A020",
      React: "#28A9E0",
      Express: "#292929",
      Mysql: "#00608C",
      ...colors,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1124px",
      "2xl": "1440px",
      "3xl": "1664px",
    },
    container: {
      center: true,
      screens: {
        xl: "1124px",
        "2xl": "1440px",
        "3xl": "1664px",
      },
    },
  },
  plugins: [],
};
export default config;
