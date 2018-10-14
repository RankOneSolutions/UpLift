var path = require('path');


module.exports = {
  context: __dirname,
  entry: './client/entry.js',
  output: {
    path: path.resolve(__dirname, 'client', 'config'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
