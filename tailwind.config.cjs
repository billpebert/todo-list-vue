/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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
		},
    extend: {
      colors: {
        skyBlue: '#16ABF8',
        dark: '#111111',
        grey: '#888888'
      }
    },
  },
  plugins: [],
}