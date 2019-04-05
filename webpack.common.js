/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production'

  return {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    output: {
      filename: '[name].bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css'],
      alias: {
        assets: path.resolve(__dirname, 'src/assets')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      })
    ],
    // optimization: {
    //   splitChunks: {
    //     chunks: 'async',
    //     minSize: 30000,
    //     minChunks: 1,
    //     maxAsyncRequests: 5,
    //     maxInitialRequests: 3,
    //     automaticNameDelimiter: '~',
    //     name: true,
    //     cacheGroups: {
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true
    //       }
    //     }
    //   }
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: isProduction ? 'url-loader' : 'file-loader',
              options: {
                limit: 8192,
                name: 'images/[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[hash].[ext]',
                publicPath: '../'     // 改变CSS中引用的图片路径
              }
            }
          ]
        },
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }
  }
}
