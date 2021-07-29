const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/** @type {import('webpack').Configuration} */
const webpackDevConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  target: "web", //webpack-server bug (hot reload will stop working without this option)
};

module.exports = merge(webpackCommon, webpackDevConfig);
