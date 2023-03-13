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
    extend: {
      colors: {
        redd: '#FF3c00',
      },
      fontFamily: {
        OpenSans: ['var(--font-Open)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
