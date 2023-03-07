/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DCCA87',
      },
      fontFamily: {
        comorant: ['Cormorant Upright', 'serif'],
        bestermind: ['Bestermind', 'sans-serif']
                                                
      },
      backgroundImage: {
        about: "url('./src/assets/about-bg.png')"
      }
    },
  },
  plugins: [],
}
