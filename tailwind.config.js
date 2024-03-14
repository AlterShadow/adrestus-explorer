const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        ad: { max: "851px" },
        // => @media (max-width: 851px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        primary: "#00AEE9",
        board: "#F3F3F3",
        fontPrimary: "#758796",
        fontSecondary: "#55626D",
        colorSeparator: "#E7ECF7",
        darkColorSeparator: "#375873",
        darkFontPrimary: "#F8F8F8",
        darkPrimary: "#1B295E",
        darkIconColor: "#69FABD",
        darkHeaderColor: "#5F98C7",
        darkViewColor: "#6fffb0",
      },
    },
  },
  plugins: [],
};
