/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0d",
        grey: "#1A1A1A",
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
      },
      maxWidth: {
        128: "32rem",
      },
    },
    screens: {
      "750px": { max: "750px" },
      "460px": { max: "460px" },
    },
  },
  plugins: [],
};
