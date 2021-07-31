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
	target: 'browserslist'
}

module.exports = merge(webpackCommon, webpackProdConfig)
