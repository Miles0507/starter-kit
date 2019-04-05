/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'		// webpack-dev-middleware
  },
  devtool: 'inline-source-map',
  // devServer: {				// webpack-dev-server
  // 	contentBase: './dist',
  // 	hot: true
  // },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
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
