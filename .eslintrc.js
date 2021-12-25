module.exports = {
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:json/recommended'
	],
	plugins: [
		'vue',
		'json',
		'prettier'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
};
