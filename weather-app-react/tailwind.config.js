/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', "sans-serif"],
      'inter': ['Inter', "sans-serif"] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}
