module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      public: ['Public Sans, sans-serif']
    },
    fontWeight:{
      light: '300',
      normal: '400',
      bold: '700'
    },
    extend: {
      colors:{
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        VeryLimeGreen: "hsl(136, 90%, 21%)",
        BrightCyan:" hsl(192, 70%, 51%)",
        VeryBrightCyan:" hsl(192, 90%, 21%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)"
      },
      screens: {
        mobile: "380px",
        desktop: "1440px"
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}