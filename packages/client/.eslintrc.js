module.exports = {
	globals: {
		process: true
	},
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'desc'
				},
				'newlines-between': 'always-and-inside-groups'
			}
		],
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn'
	},
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			fragment: 'Fragment',
			version: '17.0.2'
		},
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Hyperlink',
			{ name: 'Link', linkAttribute: 'to' }
		]
	},
	ignorePatterns: [
		'webpack.common.js',
		'webpack.dev.js',
		'webpack.prod.js',
		'.eslintrc.js',
		'node_modules',
		'postcss.config.js',
		'dist'
	]
}
