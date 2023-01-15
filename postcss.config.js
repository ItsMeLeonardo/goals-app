module.exports = {
	plugins: {
		'postcss-nested': {},
		autoprefixer: {},
		'postcss-color-mod-function': {
			importFrom: './src/styles/global.css',
		},
	},
}
