const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')

//environment
const isDevMode = process.env.NODE_ENV === 'development' ? true : false
const dotenv = require('dotenv').config({
	path: isDevMode
		? path.resolve(__dirname, '../.env.development')
		: path.resolve(__dirname, '../.env.production')
})

// style files regexes
const styleRegex = /\.(sass|css|scss)$/
const styleModuleRegex = /\.module\.(sass|css|scss)$/

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: {
		main: path.resolve(__dirname, '../src/index.js')
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			minify: isDevMode ? false : true
		}),
		new DefinePlugin({
			'process.env': JSON.stringify(dotenv.parsed)
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				include: path.join(__dirname, '../src'),
				loader: 'babel-loader'
			},
			{
				test: styleRegex,
				exclude: styleModuleRegex,
				use: [
					{
						loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader
					},
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' }
				]
			},
			{
				//CSS MODULES | EXAMPLE: file.module.css
				test: styleModuleRegex,
				use: [
					{
						loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: isDevMode
									? '[path][name]__[local]'
									: '[hash:base64]'
							}
						}
					},
					{ loader: 'postcss-loader' }
				]
			},
			{
				test: /\.png/,
				type: 'asset/resource'
			}
		]
	}
}
