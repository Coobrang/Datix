/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        main: '#111731',
        blue: '#63add7',
        gray: '#708496',
        graylight: '#f6f6f6'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        'auto-fit-18rem': 'repeat(auto-fit, minmax(18rem, 1fr))',
      }
    },
  },
  plugins: [],
}