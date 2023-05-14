/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        skin:{
          crust: "var(--crust)",
          mantle: "var(--mantle)",
          base: "var(--base)",
          surface0: "var(--surface0)",
          surface1: "var(--surface1)",
          text: "var(--text)",
          blue: "var(--blue)",
        }
      }
    },
  },
  plugins: [],
}

