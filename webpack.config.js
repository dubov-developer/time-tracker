var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: ['webpack-hot-middleware/client',
          './frontend/Root.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'build'),
    publicPath: ''
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel-loader']
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'frontend'),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'frontend',
      'node_modules',
    ]
  },
  devtool : '#inline-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
