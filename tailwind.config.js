/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%'
      }
    },
  },
  plugins: [],
}