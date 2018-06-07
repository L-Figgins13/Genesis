const webpack = require ('webpack');
const path = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
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


      rules: 
      [
        {
          test: /\.jsx$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets:['@babel/preset-env', '@babel/preset-react']
            }
          }
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ],
    },
    devtool: 'source-map',
  };