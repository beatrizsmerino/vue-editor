const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/styles.scss";`
			}
		}
	},

	// Emit 'eslint' errors and warnings in the console
	// https://cli.vuejs.org/config/#lintonsave
	lintOnSave: true,

	// Add configuration for autofix stylelint errors
	configureWebpack: {
		plugins: [
			new ESLintPlugin({
				fix: true,
				files: [
					'src/**/*.{vue,js}'
				]
			})
		]
	},
};
