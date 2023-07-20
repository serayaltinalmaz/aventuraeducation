/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3CB371",
        secondary: "#F5F5F5",
        bgDark: "#27272A",
        bgLight: "#D4D4D8",
        bgDark2: "#3F3F46",
        bgLight2: "#F4F4F5",
      }
    },
  },
  plugins: [],
}
