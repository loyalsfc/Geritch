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
        primaryBlack: '#0C0B08'
      },
      fontFamily: {
        comorant: ['Cormorant Upright', 'serif'],
        bestermind: ['Bestermind', 'sans-serif']
                                                
      },
      backgroundImage: {
        about: "url('./src/assets/about-bg.png')",
        insta: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/insta/insta-bg.png')"
      },
      boxShadow: {
        newsletter: '22px 30px 95px 1px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
