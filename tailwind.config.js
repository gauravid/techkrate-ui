/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Helix: ['Helix', 'sans-serif'], // Define your custom font
        Neue: ['Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}