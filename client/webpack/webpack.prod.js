const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
const webpackProdConfig = {
	mode: 'production',
	devtool: false,
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '',
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css'
		})
	],
	resolve: {
		extensions: ['.js'],
		modules: ['node_modules']
	},
	externals: [
		'react',
		'redux',
		'react-redux',
		'fullcalendar/react',
		'fullcalendar/daygrid',
		'fullcalendar/list',
		'fullcalendar/timegrid',
		'react-datetime-picker',
		'axios',
		'redux',
		'react-dom',
		'toastify',
		'redux-thunk',
		'thunk'
	],
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			minSize: 10000,
			maxSize: 250000
		}
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	target: 'browserslist'
}

module.exports = merge(webpackCommon, webpackProdConfig)
