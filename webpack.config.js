const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react','react-dom','react-router','isomorphic-fetch','babel-polyfill', 'socket.io-client'],
    },
    output:{
        path: __dirname + './static',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ],

    module: {
        
        loaders:[
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
                },
               
            },
            
           
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
                        loader: "image-webpack-loader",
                        query: {
                            mozjpeg: {
                              progressive: true,
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            optipng: {
                              optimizationLevel: 4,
                            },
                            pngquant: {
                              quality: '75-90',
                              speed: 3,
                            }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [ '.js' , '.jsx']
    },

    
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*' : {
                target: 'http://localhost:3000'
            },
            '/test/*' : {
                target: 'http://localhost:3000'
            }
        }
    },

    devtool: 'source-map'
}