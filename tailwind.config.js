/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7A0C0C",
        secondary: "#A4161A",
        dark: "#0F0F0F",
        cream: "#F5E6E0",
        accent: "#ff4d6d"
      }
    }
  },
  plugins: [],
}