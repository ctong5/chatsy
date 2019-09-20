const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js',
  }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  }, 
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
};