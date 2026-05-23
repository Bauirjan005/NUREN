/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#125e36", // Deep Green from logo
        secondary: "#ffb703", // Bright Yellow/Orange
        accent: {
          yellow: "#f59e0b", 
          orange: "#ea580c", 
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], 
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
