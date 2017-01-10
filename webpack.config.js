const path = require('path')

module.exports = {
  entry: './build/index.js',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/images/[name].[ext]"
      },
    ]
  }
}
