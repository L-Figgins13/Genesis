//server placeholder

const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/api');


let app = express();

//middleware
app.use(express.static('static'));
app.use(bodyParser.json());

//routes
app.use('/api', api );

//dev test
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const config = require('../webpack.config');
    config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const bundler = webpack(config);

    app.use(webpackDevMiddleware(bundler, {noInfo: true}));
    app.use(webpackHotMiddleware(bundler, {log: console.log }))
}

app.listen(3000, function () {
    console.log('App started at port 3000');
});