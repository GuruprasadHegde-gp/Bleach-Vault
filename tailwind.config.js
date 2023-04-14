/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heroColor: "#f9f4f0",
        darkColor: "#121212",
        musicColor: "#90A8ED",
        animationColor: "#23A094",
        ebooksColor: "#FFC900",
        artColor: "#90A8ED",
        articleColor: "#E2442F",
        filmColor: "#F1F333",
        educationColor: "#23A094",
        yellowColor: "#dcfac6",
        purpleColor: "#e8bde7",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Popping", "sans-serif"],
        Gothic: ["Didact Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
