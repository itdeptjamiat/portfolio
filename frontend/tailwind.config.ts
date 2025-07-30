import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1A2A6C', // deep blue
        secondary: '#FF6F61', // warm accent
        background: '#0E0E0E',
        neonPurple: '#8A2BE2',
        neonBlue: '#50B0FF',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        xs: '3px',
        sm: '6px',
        md: '10px',
      },
    },
  },
  plugins: [],
};

export default config;
