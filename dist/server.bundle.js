(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = __webpack_require__(13);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const StatsSchema = new Schema({
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 }
});

const UserSchema = new Schema({
    username: String,
    password: String,
    stats: { type: StatsSchema, default: StatsSchema }
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    _bcryptjs2.default.compare(password, this.password, callback);
};

// a very cool way to gen salts /hash << using mongoose middleware
UserSchema.pre('save', function saveHook(next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    };

    return _bcryptjs2.default.genSalt((saltError, salt) => {
        if (saltError) {
            return next(saltError);
        }

        return _bcryptjs2.default.hash(user.password, salt, (hashError, hash) => {
            if (hashError) {
                return next();
            }

            user.password = hash;

            return next();
        });
    });
});

const User = _mongoose2.default.model('User', UserSchema);

exports.default = User;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var Logger = function logger(text, name) {
    console.log(`---------Logging ${name}------------`);
    console.log(text);
    console.log(`---------- END ${name}--------------`);
    console.log();
    console.log();
};

exports.default = Logger;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/genesis').then(() => {
    console.log('mongodb connected');
    _mongoose2.default.Promse = global.Promise;
}).catch(err => {
    console.log('error connecting: ', err);
});

exports.default = _mongoose2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"jwtSecret":"zack and logan"}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _socket = __webpack_require__(11);

var _socket2 = _interopRequireDefault(_socket);

var _passport = __webpack_require__(4);

var _passport2 = _interopRequireDefault(_passport);

var _localSignup = __webpack_require__(12);

var _localSignup2 = _interopRequireDefault(_localSignup);

var _localLogin = __webpack_require__(14);

var _localLogin2 = _interopRequireDefault(_localLogin);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(15);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _sourceMapSupport = __webpack_require__(16);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _authCheck = __webpack_require__(17);

var _authCheck2 = _interopRequireDefault(_authCheck);

var _api = __webpack_require__(18);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(22);

var _auth2 = _interopRequireDefault(_auth);

var _path = __webpack_require__(24);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ABSPATH = 'C:\\Users\\zmachine\\Desktop\\ReactProjects\\Development\\Genesis\\static\\index.html';

_sourceMapSupport2.default.install();

let app = (0, _express2.default)();

//middleware
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());
app.use(_passport2.default.initialize());
app.use('/api', _authCheck2.default);

//load strategies
_passport2.default.use('local-signup', _localSignup2.default);
_passport2.default.use('local-login', _localLogin2.default);

//load routes
app.use('/api', _api2.default);
app.use('/auth', _auth2.default);

//dev test
if (process.env.NODE_ENV !== 'production') {
    const webpack = __webpack_require__(9);
    const webpackDevMiddleware = __webpack_require__(25);
    const webpackHotMiddleware = __webpack_require__(26);

    const config = __webpack_require__(27);
    config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const bundler = webpack(config);

    app.use(webpackDevMiddleware(bundler, { noInfo: true }));
    app.use(webpackHotMiddleware(bundler, { log: console.log }));
}

var server = app.listen(3000, function () {
    console.log('App started at port 3000');
});

const io = (0, _socket2.default)(server);

//this allows me to access io in the request response cycle
app.set('io', io);

app.get('/*', function (req, res) {
    res.sendFile(ABSPATH);
});

io.on('connection', socket => {
    console.log('-----SOCKET PRINTING----');
    console.log(socket.id);

    socket.on('JOIN', data => {
        console.log('Socket joining gameId:', data.game_id);
        socket.join(data.game_id);

        socket.to(data.game_id).broadcast.emit('USER_JOINED');
    });
});

io.on('disconnect', socket => {
    console.log('Socket ID:', socket.id, 'disconnecting');
});

var chat = io.of('/chat');
chat.on('connection', socket => {
    console.log(`--------Chat Socket ID:${socket.id} connecting--------`);

    socket.on('JOIN', data => {
        socket.join(data.game_id);
        (0, _logger2.default)(data.game_id, 'Joining Chat with game ID');
        socket.username = data.username;
    });

    socket.on('SEND_MESSAGE', function (data) {
        console.log('sending message');
        console.log(data);
        socket.to(data.chat_id).emit('RECIEVE_MESSAGE', data);
    });
});

chat.on('disconnect', socket => {
    console.log('Socket ID:', socket.id, 'disconnecting');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Users = __webpack_require__(0);

var _Users2 = _interopRequireDefault(_Users);

var _passportLocal = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// check to make sure i am doing somethign twice.. later after this is done
const LocalStrategy = new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    const newUser = new _Users2.default({ username: username, password: password });
    console.log('Creating New user', newUser);
    newUser.save(err => {
        if (err) {
            return done(err);
        }

        return done(null);
    });
});

exports.default = LocalStrategy;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = __webpack_require__(7);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Users = __webpack_require__(0);

var _Users2 = _interopRequireDefault(_Users);

var _passportLocal = __webpack_require__(6);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const strat = new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {

    const userData = {
        username: username.trim(),
        password: password.trim()
    };

    _Users2.default.findOne({ username: userData.username }).then(user => {
        if (!user) {
            const error = new Error('Incorrect Email or Password');
            console.log(user);
            done(error);
        }

        const payload = {
            sub: user._id
        };

        const token = _jsonwebtoken2.default.sign(payload, _index2.default.jwtSecret);

        const data = {
            id: user._id,
            username: user.username
        };
        console.log('hello from local-login');
        // Logger(data, 'user passed to login.jsx');

        done(null, token, data);
    }).catch(err => {
        done(err);
    });
});

exports.default = strat;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = __webpack_require__(7);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Users = __webpack_require__(0);

var _Users2 = _interopRequireDefault(_Users);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authCheck = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send();
    }

    // this splits the value(token) part of the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    _jsonwebtoken2.default.verify(token, _index2.default.jwtSecret, function (err, decodedToken) {

        if (err) {
            console.log(err);
        }
        const userId = decodedToken.sub;

        _Users2.default.findById(userId).then(user => {
            if (!user) {
                res.status(401).send();
            }

            //saves the decoded token information on the request object
            //for user later on in the request life cycle

            req.user = user;
            console.log('-------logging user from token-------');
            console.log(user);

            next();
        }).catch(error => {
            console.log(error);
        });
    });
};

exports.default = authCheck;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _Games = __webpack_require__(19);

var _Games2 = _interopRequireDefault(_Games);

var _Users = __webpack_require__(0);

var _Users2 = _interopRequireDefault(_Users);

var _broadcast = __webpack_require__(21);

var _broadcast2 = _interopRequireDefault(_broadcast);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/games', (req, res, next) => {
    _Games2.default.find({}).then(function (games) {
        console.log(games);
        res.json(games);
    });
});

router.get('/games/:id', (req, res, next) => {

    _Games2.default.findById(req.params.id).then(game => {

        // if(err) { console.log(err)};

        (0, _logger2.default)(JSON.stringify(game), 'GET /games/:id');

        if (!game) {
            res.status(400).send('game not found');
        }

        res.json(game);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/games/create', (req, res, next) => {
    const newGame = new _Games2.default({ owner: req.body.owner, title: req.body.title });

    console.log('------------logging player before save----------');
    console.log(req.user);
    console.log();

    newGame.players.push({ user_id: req.user._id, username: req.user.username });
    console.log('logging new Game', newGame);

    newGame.save().then(doc => {
        console.log(doc);
        res.json({ msg: 'ok', game_id: doc._id });
    }).catch(err => {
        console.log(err);
    });
});

router.post('/games/join', (req, res, next) => {
    (0, _logger2.default)(req.body.game_id, 'Game ID FROM REQUEST');

    _Games2.default.join(req.body.game_id, req.user).then(result => {

        console.log(JSON.stringify(result));
        // broadcast(req.app.get('io'), req.body.game_id, 'PLAYER_JOINED', data);
        res.status(200).json(result);
    }).catch(error => {
        (0, _logger2.default)(JSON.stringify(error), 'Error in /games/join');
        res.json(error);
    });
});

//----------- Start User (Profile) Routes-------------------

router.get('/users/:id', (req, res, next) => {

    console.log('this route even being touched');
    // Logger(req.params.id, 'URL PARAMS');

    _Users2.default.findById(req.params.id).then(user => {
        (0, _logger2.default)(JSON.stringify(user), 'User returned from database');

        console.log('testing webpack');

        res.status(200).json(user);
    }).catch(err => {
        (0, _logger2.default)(err, 'Error Object in route /users/:id');
    });
});

exports.default = router;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _constants = __webpack_require__(20);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const ImgSchema = new Schema({
    name: String,
    url: String
});

const CardSchema = new Schema({
    name: String,
    ruleText: String,
    value: Number,
    suit: String,
    image: ImgSchema
});

const PlayerSchema = new Schema({
    user_id: String,
    username: String,
    health: { type: Number, default: 100 }
});

// const Player = mongoose.model('Player', PlayerSchema);

const GameSchema = new Schema({
    owner: String,
    title: String,
    hasStarted: { type: Boolean, default: false },
    gameCards: [CardSchema],
    players: [PlayerSchema]
});

GameSchema.statics.join = function join(gameID, user) {
    //stages player to be added to the game
    const player = {
        user_id: user._id,
        username: user.username

        //creates a promise to be returned so that the final .then() will be in the route
    };const promise = new Promise((resolve, reject) => {
        this.model('Game').findById(gameID).then(game => {
            const data = {
                message: '',
                errCode: 0,
                success: false,
                player: {}
            };

            (0, _logger2.default)(_constants2.default.MAX_PLAYERS, 'MAX_PLAYER CONSTANT');

            if (game.players.length >= _constants2.default.MAX_PLAYERS) {
                data.message = 'Game is Full';
                data.errCode = 1;
                return reject(data);
                (0, _logger2.default)(data, 'Data: ');
            } else if (game.hasStarted) {
                data.message = 'Sorry the Game Has Already Started';
                data.errCode = 2;
                reject(data);
                (0, _logger2.default)(data, 'Data: ');
            } else if (game.players.some(x => x.user_id === player.user_id)) {
                data.message = 'ERROR: Player already exists in game';
                data.errCode = 3;
                reject(data);
                (0, _logger2.default)(data, 'Data: ');
            } else {
                this.model('Game').findByIdAndUpdate(gameID, { $push: { players: player } }).then(updatedGame => {
                    data.message = `Player ${player.username} has succesfully joined the game`;
                    data.success = true;
                    data.player = player;

                    resolve(data);
                    (0, _logger2.default)(data, 'Data: ');
                });
            }
        });
    });

    return promise;
};

var Game = _mongoose2.default.model('Game', GameSchema);

module.exports = Game;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

const constants = {
    MAX_PLAYERS: 2
};

exports.default = constants;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const broadcast = (io, room, message, data) => {
    console.log('broadcast', room, message, data);

    io.in(room).emit(message, data);
};

exports.default = broadcast;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _validator = __webpack_require__(23);

var _validator2 = _interopRequireDefault(_validator);

var _passport = __webpack_require__(4);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express2.default.Router();

//probably a syntatical error here (fixed)

router.post('/signup', (req, res, next) => {
    _passport2.default.authenticate('local-signup', err => {

        console.log('Code executing in server side /signup route');

        if (err) {
            console.log(err);

            return res.status(400).json({
                success: false,
                message: 'error in signup post'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'You have created a user'
        });
    })(req, res, next);
});

router.post('/login', (req, res, next) => {
    _passport2.default.authenticate('local-login', (err, token, userData) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'You have logged in',
            token,
            user: userData
        });
    })(req, res, next);
});

exports.default = router;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const webpack = __webpack_require__(9);
const extractTextPlugin = __webpack_require__(28);

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router', 'isomorphic-fetch', 'babel-polyfill', 'socket.io-client']
    },
    output: {
        path: __dirname + './static',
        filename: 'app.bundle.js'
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })],

    module: {

        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                plugins: [new extractTextPlugin('./src/css/styles.css')]
            }
        }, {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
                loader: "image-webpack-loader",
                query: {
                    mozjpeg: {
                        progressive: true
                    },
                    gifsicle: {
                        interlaced: false
                    },
                    optipng: {
                        optimizationLevel: 4
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 3
                    }
                }
            }]
        }]
    },

    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    },

    devtool: 'source-map'
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ })
/******/ ])));
//# sourceMappingURL=server.bundle.js.map