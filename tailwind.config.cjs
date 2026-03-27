/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-100' : '#ffffff',
        'white-50': '#d9ecff',
        'black-50': '#1c1c21',
        'black-100': '#0e0e10',
        'black-200': '#282732',
        'blue-50': '#839cb5',
        'blue-100': '#2d2d38',
      },
    },
  },
  plugins: [],
}
