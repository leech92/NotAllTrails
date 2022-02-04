const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/not_all_trails.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'javascript', 'packs'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};