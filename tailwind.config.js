module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Benton Sans Light", "Arial", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    fontSize: {
      base: "1rem",
      xl: "1.8rem",
      "3xl": "2.6rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
