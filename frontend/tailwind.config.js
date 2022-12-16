/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'dark1': '#121212',
				'dark2': '#181818',
				'dark3': '#262626',
				'purple': '#A946D8',
			}
		},
	},
	plugins: [],
}
