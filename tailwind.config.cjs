/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0fbfc',
          200: '#98c1d9',
          300: '#3d5a80',
          400: '#293241'
        },
        secundary: {
          400: '#ee6c4d'
        },
        // opaced: {
        //   100: 'rgba(0, 0, 0, 0.3)'
        // }
        // 3d5a80, 98c1d9, e0fbfc, ee6c4d, 293241
        // 0b132b, 1c2541, 3a506b, 5bc0be, 6fffe9
      },
      boxShadow: {
        leftBotton: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      }

    },
    container: {
      center: true,
    },
  },
  plugins: [],
};