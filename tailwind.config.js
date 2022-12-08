/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: "'Poppins', sans-serif",
			},
		},
	},
	plugins: [],
};
