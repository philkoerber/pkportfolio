/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': '480px',
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
      colors:{
        "battlegray": "#82816D",
        "isabelline": "#EBE2DE",
        "eyeblue": "#008AB8",
        "delftblue": "#414066"
      },
      fontFamily: {
      instrument: ['Instrument Serif', "serif"],
        urbanist: ['Urbanist', "sans-serif"],
      }

    },
  },
  plugins: [],
}

