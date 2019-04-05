/* eslint-disable import/no-extraneous-dependencies */
const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.dev.js')

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)  // eslint-disable-line new-cap

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
