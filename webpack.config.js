const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          'es2015',
          'react'
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
