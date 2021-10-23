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
		},
		screens: {
			xs: '412px', // hide 2 icon top-bar, video 1 col
			sm: '496px', // show 2 icon top-bar, video 2 col
			'2sm': '642px', // show search input + mic icon
			'3sm': '738px',
			md: '792px', //show small side bar
			'2md': '872px', // video 3 col
			'3md': '1000px',
			lg: '1128px', // video 4 col
			xl: '1313px', // show side bar
			'4xl': '1754px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
