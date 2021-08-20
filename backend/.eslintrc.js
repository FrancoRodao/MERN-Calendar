module.exports = {
	env: {
		node: true,
		commonjs: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {},
	ignorePatterns: ['.eslintrc.js', 'node_modules', 'dist', 'docs', 'public']
}
