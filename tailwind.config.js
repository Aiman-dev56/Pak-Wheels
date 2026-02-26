/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
    artico: ["Artico", "sans-serif"],
  },
    },
  },
   plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
