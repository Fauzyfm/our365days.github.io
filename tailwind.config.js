/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './coursel.html'
          ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#E79B9C',
        'primary':'#F8AB91',
        'coklat': '#7F6347',
        'biru-muda':'#C6D6F5'
      },
      fontFamily: {
        inter:['Inter']
      },

    },

  },
  plugins: [],
}

