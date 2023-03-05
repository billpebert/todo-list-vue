/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
			poppins: "Poppins, sans-serif",
		},
    container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "50px",
				xl: "220px",
			},
      screens: {
        'sm': '576px',
      }
		},
    extend: {
      colors: {
        skyBlue: '#16ABF8',
        dark: '#111111',
        grey: '#888888',
        danger: '#ED4C5C',
        secondary: '#F4F4F4',
        darkBrown: '#4A4A4A'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}