module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: {
          1000: "#13041A"
        },
        pink: {
          1000: "#E61873"
        },
        purple: {
          1000: "#6C2A86"
        }
      },
      screens: {
        xs: { max: "640px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px" }
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: []
}
