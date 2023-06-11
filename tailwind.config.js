/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbit: ['Orbit'],
        alien: ['Gasoek One']
      },
      colors: {
        myCyan: '#4ECAF1'
      }
    },
  },
  plugins: [],
}

