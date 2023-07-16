/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-100": "#3F7C6E",
        "green-200": '#3C9761'
      },
      fontFamily: {
        "voces": ["Voces", "cursive"],
        "roboto": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

