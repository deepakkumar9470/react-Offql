export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'heroBg': "url('/assets/bg-vector.png')",
        'mylinear' :'linear-gradient(to right, #FEFEFE,#407BFF )'
       
      },
      colors :{
        mainText : "#407BFF",
        textColor :"#A4A4A4",
        textBlack :"#0A0B3B",
        btnColor : "#534AEC",
        myGray : "#D9D9D9"
      }
    },
  },
  plugins: [],
}