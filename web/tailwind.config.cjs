/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.svg')",
        'nlw-gradiant': 'linear-gradient(89.86deg, #9572FC 25%, #43E7AD 10%, #E1D55D 65%)',
        'game-gradiant': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}
