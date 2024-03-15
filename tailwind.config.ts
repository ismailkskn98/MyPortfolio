import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        BG1: '#292F36',
        BG2: '#1A1E23',
        Brand1: '#12F7D6',
        Brand2: '#98FAEC',
        Grey: '#43454D',
        White: '#FFFFFF',
        Html: '#E54F26',
        Css: '#0C73B8',
        TailwindCss: '#38BDF8',
        Bootstrap: '#7410F0',
        Js: 'E7A020',
        Vue1: '#41AD7D',
        Vue2: '#34485D',
        React: '#28A9E0',
        Next: '#000000',
        Mysql1: '#006189',
        Mysql2: '#E48E00',
      },
    },
  },
  plugins: [],
};
export default config;
