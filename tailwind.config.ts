import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020817',
        },
        brand: {
          blue: '#3B82F6',
          emerald: '#34D399',
          slate: '#0F172A',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.35), 0 20px 60px rgba(59,130,246,0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
