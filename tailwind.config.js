/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'index.html'],
  theme: {
    screens: {
      'sm': '576px',
      'sm': '640px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {},
  },
  plugins: [],
}