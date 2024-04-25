const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'honestToGodGreen': '#00FF00', // replace '#00FF00' with your desired hex color code
      },
    },
  },
  variants: {},
  plugins: [nextui()],
};