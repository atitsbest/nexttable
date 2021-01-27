module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Benton Sans Light", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    container: {
      padding: {
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
