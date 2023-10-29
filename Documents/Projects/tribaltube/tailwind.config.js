/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: "2.6rem",
      },
      screens: {
        xs: "475px",
      },
      colors: {
        main: "#080A1A",
        subMain: "#f20000",
        dry: "#0b0f29",
        star: "#ffb000",
        text: "#c0c0c0",
        border: "#4b5563",
        dryGray: "#e0d5d5",
      },
    },
  },
  plugins: [],
};
