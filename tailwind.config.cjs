const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [daisyui],
	daisyui: {
		darkTheme: 'dark',
		themes: [
			{
				customTheme: {
					primary: '#2F1C9C',
					secondary: '#0E35FB',
					accent: '#199D9F',
					neutral: '#050311',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	}
};

module.exports = config;
