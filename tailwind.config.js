/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161722',
        secondary: '#454753',
        tertiary: '#8A8C99',
        quaternary: '#E1E3E6',
        quinary: '#F8F9FB',
        gold: "#EFBF04",
      },
      fontFamily: {
        body: ["Roboto", "serif"], 
      },
    },
  },
  plugins: [],
}