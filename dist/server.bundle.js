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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _socket = __webpack_require__(5);

var _socket2 = _interopRequireDefault(_socket);

var _passport = __webpack_require__(6);

var _passport2 = _interopRequireDefault(_passport);

var _localSignup = __webpack_require__(7);

var _localSignup2 = _interopRequireDefault(_localSignup);

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _sourceMapSupport = __webpack_require__(11);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _authCheck = __webpack_require__(20);

var _authCheck2 = _interopRequireDefault(_authCheck);

var _api = __webpack_require__(13);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(18);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

let app = (0, _express2.default)();

//middleware
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());
app.use(_passport2.default.initialize());
app.use('./api', _authCheck2.default);

//load strategies
_passport2.default.use('local-signup', _localSignup2.default);
_passport2.default.use('local-login', _localSignup2.default);

//load routes
app.use('/api', _api2.default);
app.use('/auth', _auth2.default);

//dev test
if (process.env.NODE_ENV !== 'production') {
    const webpack = __webpack_require__(3);
    const webpackDevMiddleware = __webpack_require__(15);
    const webpackHotMiddleware = __webpack_require__(16);

    const config = __webpack_require__(17);
    config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const bundler = webpack(config);

    app.use(webpackDevMiddleware(bundler, { noInfo: true }));
    app.use(webpackHotMiddleware(bundler, { log: console.log }));
}

var server = app.listen(3000, function () {
    console.log('App started at port 3000');
});

var io = (0, _socket2.default)(server);

io.on('connection', socket => {
    console.log('-----SOCKET PRINTING----');
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function (data) {
        io.emit('RECIEVE_MESSAGE', data);
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Users = __webpack_require__(8);

var _Users2 = _interopRequireDefault(_Users);

var _passportLocal = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// check to make sure i am doing somethign twice.. later after this is done
const strat = new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    const newUser = new _Users2.default({ username: username, password: password });

    newUser.save(err => {
        if (err) {
            return done(err);
        }

        return done(null);
    });
});

exports.default = strat;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

var _db2 = _interopRequireDefault(_db);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = __webpack_require__(9);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose2.default.Schema({
    username: String,
    password: String
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    _bcryptjs2.default.compare(password, this.password, callback);
};

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

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _Games = __webpack_require__(14);

var _Games2 = _interopRequireDefault(_Games);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

const game = {
    _id: '5a84d940441f6514587f40aa',
    players: [{
        _id: 1,
        username: 'Logan'
    }, {
        _id: 2,
        username: 'Zach'
    }, {
        _id: 3,
        username: 'James'
    }]
};

router.get('/games', (req, res, next) => {
    _Games2.default.find({}).then(function (games) {
        console.log(games);
        res.json(games);
    });
});

router.get('/games/:id', (req, res, next) => {
    if (req.params.id === game._id) {
        console.log('found the game mother fucker');
        res.json(game);
    } else {
        console.log('gameID does not match');
        res.status(500).send('game not found');
    }
});

router.post('/games/create', (req, res, next) => {
    const newGame = new _Games2.default({ owner: req.body.owner, title: req.body.title });
    console.log('fuck me sideways');
    newGame.save().then(doc => {
        console.log(doc);
        res.json({ msg: 'ok' });
    }).catch(err => {
        console.log(err);
    });
});

exports.default = router;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(1);

var _db2 = _interopRequireDefault(_db);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

var gameSchema = new Schema({
    owner: String,
    title: String
});

// gameSchema.statics.createGame = function(cb) {
//     return this.model('Game').
// }

var Game = _mongoose2.default.model('Game', gameSchema);

module.exports = Game;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const webpack = __webpack_require__(3);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _passport = __webpack_require__(6);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express2.default.Router();

//probably a syntatical error here

router.post('/signup', (req, res, next) => {
    _passport2.default.authenticate('local-signup', err => {
        if (err) {
            console.log(err);

            res.status(400).json({
                success: false,
                message: 'error in signup post'
            });
        }

        res.status(200).json({
            success: true,
            message: 'You have created a user'
        });
    });
});

_passport2.default.authenticate('local-login', _passport2.default.authenticate('local-login', (err, token, userData) => {
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
}));

exports.default = router;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = __webpack_require__(21);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Users = __webpack_require__(8);

var _Users2 = _interopRequireDefault(_Users);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authCheck = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send();
    }

    // this splits the value(token) part of the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    _jsonwebtoken2.default.verify(token, _index2.default.jwtSecret).then(decodedToken => {
        const userId = decodedToken.sub;

        _Users2.default.findById(userId).then(user => {
            if (!user) {
                res.status(401).send();
            }

            //saves the decoded token information on the request object
            //for user later on in the request life cycle

            req.user = user;
            console.log(user);

            next();
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        res.status(401).send();
    });
};

exports.default = authCheck;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {"jwtSecret":"zack and logan"}

/***/ })
/******/ ])));
//# sourceMappingURL=server.bundle.js.map