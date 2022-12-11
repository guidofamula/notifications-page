/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontWeight: {
      medium: 500,
      bold: 800,
    },
    extend: {
      screens: {
        sm: "359px",
        "2xl": "1440px",
      },
      colors: {
        primary: {
          red: "hsl(var(--red) / <alpha-value>)",
          blue: "hsl(var(--blue) / <alpha-value>)",
        },
        netral: {
          white: "hsl(var(--white) / <alpha-value>)",
          "g-blue-1": "hsl(var(--very-light-grayish-blue) / <alpha-value>)",
          "g-blue-2": "hsl(var(--light-grayish-blue-1) / <alpha-value>)",
          "g-blue-3": "hsl(var(--light-grayish-blue-2) / <alpha-value>)",
          "g-blue-4": "hsl(var(--grayish-blue) / <alpha-value>)",
          "d-g-blue": "hsl(var(--dark-grayish-blue) / <alpha-value>)",
          "v-d-blue": "hsl(var(--very-dark-blue) / <alpha-value>)",
        },
      },
      fontFamily: {
        body: ["JakartaSans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
