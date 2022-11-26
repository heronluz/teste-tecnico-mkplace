/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        arrowDown: 'url(/IconDown.svg)'
      },
      colors: {
        gray: {
          70: '#F9F9F9',
          100: '#F1F5F5',
          300: '#CFDBD5',
          500: '#5D5D5B'
        },
        red: {
          100: '#F89797',
          200: '#F45252',
          300: '#ED1B49'
        }
      },
      borderRadius: {
        lg: '0.625rem'
      },
      backgroundColor: {
        gray: {
          400: '#EBF0F0'
        }
      }
    },
  },
  plugins: [],
}
