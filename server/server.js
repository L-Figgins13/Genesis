const ABSPATH = 'C:\\Users\\zmachine\\Desktop\\ReactProjects\\Development\\Genesis\\static\\index.html'

import socket from 'socket.io';

import passport from 'passport';
import localSignupStrategy from './passport/local-signup.js';
import localLoginStrategy from './passport/local-login.js';
import Logger from './logger.js';

import express from 'express';
import bodyParser from 'body-parser';
import SourceMapSupport from 'source-map-support';

import authCheck from './auth-check.js';
import api from './routes/api.js';
import auth from './routes/auth.js';
import test from './routes/test.js';
import path from 'path';



SourceMapSupport.install();

let app = express();

//middleware
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/api', authCheck);


//load strategies
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


//load routes
app.use('/api', api );
app.use('/auth', auth);


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

var server = app.listen(3000, function () {
    console.log('App started at port 3000');
});

const io = socket(server);


//this allows me to access io in the request response cycle
app.set('io', io);



app.get('/*', function(req,res){
    console.log(path.join(path.resolve(__dirname, '..'),'static/index.html')); 

    res.sendFile(path.join(path.resolve(__dirname, '..'),'static/index.html'));
})



io.on('connection' , (socket) => {
    console.log('-----SOCKET PRINTING----');
    console.log(socket.id);

    socket.on('JOIN', data => {
        console.log('Socket joining gameId:', data.game_id);
        socket.join(data.game_id);
        
        socket.to(data.game_id).broadcast.emit('USER_JOINED');
        
    })
});

io.on('disconnect', socket => {
    console.log('Socket ID:', socket.id, 'disconnecting');

})



var chat = io.of('/chat');
chat.on('connection', socket => {
    console.log(`--------Chat Socket ID:${socket.id} connecting--------`);

    socket.on('JOIN', data => {
        socket.join(data.game_id);
        Logger(data.game_id, 'Joining Chat with game ID');
        socket.username = data.username;
    })

    socket.on('SEND_MESSAGE', function(data) {
        console.log('sending message');
        console.log(data);
        socket.to(data.chat_id).emit('RECIEVE_MESSAGE', data);
    })
})

chat.on('disconnect', socket => {
    console.log('Socket ID:', socket.id, 'disconnecting');
})