const webpack = require ('webpack');

module.exports = {
    target: 'node',
    entry: './server/server.js',
    output: {
      path: __dirname + '/dist',
      filename: 'server.bundle.js',
      libraryTarget: 'commonjs',
    },
    resolve: {
      extensions: [ '.js', '.jsx'],
    },
    externals: [/^[a-z]/],
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'node8'],
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['node8'],
          },
        },
      ],
    },
    devtool: 'source-map',
  };