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
      },
      fontFamily:{
        mono: ['var(--slabo-font)', ...fontFamily.mono],
        sans: ['var(--lato-font)', ...fontFamily.sans],
        marker: ['var(--permanent_marker-font)', 'var(--slabo-font)', ...fontFamily.mono]
      },
    },
  },
  plugins: [],
}
