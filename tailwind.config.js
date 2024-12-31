/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        background: "#0a192f",
        card: "#0d2139",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  plugins: [],
};
