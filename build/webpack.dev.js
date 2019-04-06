/* eslint-disable import/no-extraneous-dependencies */
// const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const common = require('./webpack.common.js')


module.exports = env => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {				// webpack-dev-server
    compress: true,
    hot: true
  },
  plugins: [
    // 美观的日志打印面板
    new DashboardPlugin(),
    // 热加载
    new webpack.HotModuleReplacementPlugin()
  ]
})
