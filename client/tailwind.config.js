module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// 'text-gray': '#606060',
			},
			spacing: {
				'nav-height': '56px',
			},
			colors: {
				'dark-main': '#181818',
				'dark-second': '#212121',
				'dark-third': '#373737',
				'dark-text': '#A0A0A0',
				'dark-border': '#383838',
			},
			screens: {
				// xs: '562px',
				md: '792px',
				'2md': '872px',
				lg: '1128px',
				xl: '1313px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
