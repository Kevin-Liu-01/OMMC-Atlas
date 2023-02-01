/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["exo", "sans-serif"],
        quicksand: ["quicksand", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    // require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
