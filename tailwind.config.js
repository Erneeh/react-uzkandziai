module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'  // Ensures that Tailwind looks in all TypeScript and JavaScript files
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFFFF0",
        headerColor: "#FFFFF0",
        footerColor: "#ACB5A3",
        headerFooterText: "#333333",
        textColor:"#FFFFFF",
        buttonColor: "#E07B39",
  
        


      },
    },
  },
  plugins: [],
}