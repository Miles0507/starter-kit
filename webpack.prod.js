/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const merge = require('webpack-merge')
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = env => merge(common(env), {
  mode: 'production',
  output: {
    filename: 'javascript/[name].bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,						 								// 默认true，所有javascript资源将注入到body元素的底部
      minify: {
        removeComments: true,									// 去除注释
        collapseWhitespace: true,							// 去除标签间空白符
        removeAttributeQuotes: true,					// 去除属性值引号
        removeScriptTypeAttributes: true,			// 去除type="text/javascript"
        removeStyleLinkTypeAttributes: true		// 去除type="text/css"
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].[contenthash].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
