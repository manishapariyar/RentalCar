export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
        light: "ffffff"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};