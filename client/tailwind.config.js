module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// 'text-gray': '#606060',
			},
			spacing: {
				nav: '56px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
