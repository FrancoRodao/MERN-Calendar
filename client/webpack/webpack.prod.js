const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

/** @type {import('webpack').Configuration} */
const webpackProdConfig = {
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '',
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].bundle.js',
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css'
		})
	],
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [new CssMinimizerPlugin()]
	},
	target: 'browserslist'
}

module.exports = merge(webpackCommon, webpackProdConfig)
