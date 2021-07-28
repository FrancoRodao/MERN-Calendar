module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2021: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {},
	ignorePatterns: ['.eslintrc.js', 'node_modules', 'dist', 'docs', 'public']
}
