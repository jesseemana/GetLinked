/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#150E28',
        'text-color': '#D434FE',
        'light-blue': '#903AFF',
      },
    },
  },
  plugins: [],
};