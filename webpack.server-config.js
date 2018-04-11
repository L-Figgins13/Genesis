const webpack = require ('webpack');
const path = require('path');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, 'server/server.js'),
    output: {
      path: path.join(__dirname,'/dist'),
      filename: 'server.bundle.js',
      libraryTarget: 'commonjs',
    },
    node:{
      __dirname:false
    },
    resolve: {
      extensions: [ '.js', '.jsx'],
    },
    externals: [/^[a-z]/,'./db.js' ],
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