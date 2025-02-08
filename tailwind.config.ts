/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#4B3832",
        stoneGray: "#7D7D7D",
        ivoryWhite: "#F2F2F2",
        deepNavy: "#2C3E50",
      },
    },
  },
  plugins: [],
};
