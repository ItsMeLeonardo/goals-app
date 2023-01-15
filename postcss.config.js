module.exports = {
	plugins: {
		'postcss-nested': {},
		autoprefixer: {},
		'postcss-color-mod-function': {
			importFrom: './styles/globals.css',
		},
	},
}
