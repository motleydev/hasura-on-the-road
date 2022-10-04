const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

const hasColors = {
  "has-cyan": {
    50: "#DEF9FF",
    100: "#DEF9FF",
    200: "#B4F2FF",
    300: "#75E7FF",
    400: "#45D7F6",
    500: "#27C4E5",
    600: "#16A9C9",
    700: "#08788F",
    800: "#005365",
  },

  "has-blue": {
    50: "#DEF9FF",
    100: "#DEF9FF",
    200: "#B4F2FF",
    300: "#75E7FF",
    400: "#45D7F6",
    500: "#27C4E5",
    600: "#16A9C9",
    700: "#08788F",
    800: "#005365",
  },
  "has-purple": {
    50: "#F2EAFF",
    100: "#F2EAFF",
    200: "#E5D4FF",
    300: "#C8A7FF",
    400: "#A36FF8",
    500: "#7539D7",
    600: "#511AAA",
    700: "#39068B",
    800: "#2A0070",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hasolor: hasColors["has-cyan"],
        ...hasColors,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
