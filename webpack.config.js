const webpack = require('webpack');


module.exports = {

    mode: 'development',

    entry: {
        app: [ '@babel/polyfill' ,'./src/index.jsx'],
        vendor: [ 'react', 'react-router', 'react-router-dom', 'socket.io-client' ,'styled-components', 'grid-styled']
    },
    output:{
        path: __dirname + './static',
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendor',
                },
                app: {
                    name: 'app',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    module: {

        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            },

            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: `[path][name].[ext]?[hash]`
                    }
                }
            },

            {
                test: /\.(mp3|wav)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: `[path][name].[ext]?[hash]`
                    }
                }
            }

        ],


        
        // 
    },

    resolve: {
        extensions: [ '.js' , '.jsx']
    },

    
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: [
            {
                context : ['/api', '/auth'],
                target: 'http://localhost:3000',
                secure: false
            }
        ]    
    },

    devtool: 'source-map'
}




// OLDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD CONFIG
//loaders:[
    //     {
    //         test: /\.jsx$/,
    //         loader: 'babel-loader',
    //         exclude: /node_modules/,
    //         query: {
    //             presets: ['@babel/preset-env', '@babel/preset-react'],
    //             plugins: [require('@babel/plugin-proposal-object-rest-spread')]
    //         }
           
    //     },

    //     Rules
        
       
    //     {
    //         test: /\.(jpe?g|png|gif|svg|ico)$/i,
    //         loaders: [
    //             'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
    //                 loader: "image-webpack-loader",
    //                 query: {
    //                     mozjpeg: {
    //                       progressive: true,
    //                     },
    //                     gifsicle: {
    //                       interlaced: false,
    //                     },
    //                     optipng: {
    //                       optimizationLevel: 4,
    //                     },
    //                     pngquant: {
    //                       quality: '75-90',
    //                       speed: 3,
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // ]