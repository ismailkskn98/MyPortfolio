import type { Config } from "tailwindcss";

const config: Config = {
    corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-bg': "url('/images/about/bg.svg')",
      }
    },
    colors: {
      'BG1': '#292F36',
      'BG2': '#1A1E23',
      'Brand1': '#12F7D6',
      'Brand2': '#98FAEC',
      'Grey': '#43454D',
      'White': '#FFFFFF',
      'Html': '#E54F26',
      'CSS': '#0C73B8',
      'JS': '#E7A020',
      'React': '#28A9E0',
      'Express': '#292929',
      'Mysql': '#00608C',
    }
  },
  plugins: [],
};
export default config;
