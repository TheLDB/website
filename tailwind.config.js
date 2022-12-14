/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        site: {
          'white': '#FBFAF5',
          'black': '#0E1111'
        }
      },
      fontFamily: {
        'poppins': ["Poppins"]
      }
    },
  },
  plugins: [],
}