/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,jsx,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
      lg: '1280px',
      xl: '1536px',
    },
    extend: {
      colors: {
        redd: '#FF3c00',
        blackl: '#1a1a1b',
        blue1: '#33a8ff',
      },
      fontFamily: {
        OpenSans: ['var(--font-Open)', 'sans-serif'],
      },
      borderRadius: {
        '5xl': '60px',
      },
    },
  },
  plugins: [],
};
