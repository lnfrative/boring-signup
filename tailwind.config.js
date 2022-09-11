/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbc2eb',
        secondary: '#a18cd1',
        back: '#000',
        white: '#fff',
      },
      boxShadow: {
        primary: '0px 8px 20px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
