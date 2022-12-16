const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stormy: '#494E6B',
        cloud: '#98878F',
        sunset: '#985E6D',
        evening: '#192231',
        blackgrey: '#222831',
        blackgreylighter: '#393E46',
        teal: '#00ADB5',
        light: '#EEEEEE',
        sweater: '#90adbc',
        sweaterdarker: '#436F7D',
        pagebackground: '#131313',
      },
      fontFamily: {
        mono: ['var(--slabo-font)', ...fontFamily.mono],
        sans: ['var(--lato-font)', ...fontFamily.sans],
        marker: ['var(--permanent_marker-font)', 'var(--slabo-font)', ...fontFamily.mono]
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': {transform: 'rotate( 0.0deg)'},
          '10%, 30%': {transform: 'rotate(14.0deg)'},
          '20%': {transform: 'rotate(-8.0deg)'},
          '40%': {transform: 'rotate(-4.0deg)'},
          '50%': {transform: 'rotate(10.0deg)'},
        }
      },
      animation:{
        wave: 'wave 2.5s linear infinite',
      }
    },
  },
  plugins: [],
}
