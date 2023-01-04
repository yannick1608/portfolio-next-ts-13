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
        },
        'shootingstar-tr': {
          '0%': {transform: 'rotate(315deg) translateX(0)', opacity: 1},
          '88%': {transform: 'rotate(315deg) translateX(0)', opacity: 1},
          '92%': {opacity: 1},
          '100%': {transform: 'rotate(315deg) translateX(-2500px)', opacity: 0}
        },
        'shootingstar-tl': {
          '0%': {transform: 'rotate(225deg) translateX(0)', opacity: 1},
          '50%': {transform: 'rotate(225deg) translateX(0)', opacity: 1},
          '64%': {opacity: 1},
          '70%': {transform: 'rotate(225deg) translateX(-2500px)', opacity: 0},
          '100%': {transform: 'rotate(225deg) translateX(-2500px)', opacity: 0}
        },
      },
      animation:{
        wave: 'wave 2.5s linear infinite',
        'shooting-stars-tr': 'shootingstar-tr 15s linear infinite',
        'shooting-stars-tl': 'shootingstar-tl 10s linear infinite',
      },
      boxShadow: {
        'shooting-star': '0 0 0 4px rgba(238, 238, 238, 0.1), 0 0 0 8px rgb(238, 238, 238, 0.1), 0 0 20px rgb(238 238 238)',
      }
    },
  },
  plugins: [],
}
