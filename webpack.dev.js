/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const common = require('./webpack.common.js')

module.exports = env => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {				// webpack-dev-server
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
