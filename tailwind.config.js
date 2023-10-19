/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate400: "#94a3b8",
        StylesBackground: "#1F1F1F",
        StylesImport: "#C586C0",
        string: "#CE9178",
        identified: "#9CDCFE",
        functions: "#569CD6",
        parameter: "#E2D700",
        white: "#CCCCCC",
      },
    },
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
