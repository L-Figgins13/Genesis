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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _renderedPageRouter = __webpack_require__(4);

var _renderedPageRouter2 = _interopRequireDefault(_renderedPageRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//server placeholder
const SourceMapSupport = __webpack_require__(5);
SourceMapSupport.install();

const express = __webpack_require__(0);
const bodyParser = __webpack_require__(6);

const api = __webpack_require__(7);

let app = express();

//middleware
app.use(express.static('static'));
app.use(bodyParser.json());

//routes
// app.get('*', (req, res) => {

// });
app.use('/api', api);
// app.use('/', renderedPageRouter);

//dev test
if (process.env.NODE_ENV !== 'production') {
    const webpack = __webpack_require__(2);
    const webpackDevMiddleware = __webpack_require__(10);
    const webpackHotMiddleware = __webpack_require__(11);

    const config = __webpack_require__(12);
    config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const bundler = webpack(config);

    app.use(webpackDevMiddleware(bundler, { noInfo: true }));
    app.use(webpackHotMiddleware(bundler, { log: console.log }));
}

app.listen(3000, function () {
    console.log('App started at port 3000');
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import Router from 'express';
// import {match, RouterContext} from 'react-router';


// import HelloWorld from '../../src/HelloWorld.jsx';
// import GamesList from '../../src/GamesList';

// import template from '../template.js';
// import routes from '../../src/Routes';

// import ContextWrapper from '../../src/ContextWrapper';


// const renderedPageRouter = new Router();

// renderedPageRouter.get('*', (req,res) => {
//     match({routes, location: req.url},
//     (error, redirectLocation, renderProps) => {
//         if(error) {
//             res.status(500).send(error.message);
//         } else if (redirectLocation) {
//             res.redirect(302, redirectLocation.pathname, +redirectLocation.search);
//         } else if (renderProps){
//             fetch(`http://localhost:3000/api${req.url}`)
//             .then(response => {
//                 response.json()
//                 .then(data => {
//                     const initialState = {data};
//                     const html = ReactDOMServer.renderToString(
//                         <ContextWrapper initialState = {initialState} >
//                             <RouterContext {...renderProps} />
//                             </ContextWrapper>
//                     );
//                     res.status(200).send(template(html,initialState));
//                 })
//                 .catch(err => {
//                     console.log(`Errror rendering to string: ${err}`);
//                 });
//             })
//         } else {
//             res.status(404).send('Not Found');
//         }
//     });
// });
// export default renderedPageRouter;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Games = __webpack_require__(8);

var _Games2 = _interopRequireDefault(_Games);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = __webpack_require__(0);
const router = express.Router();


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

module.exports = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(9);

var _db2 = _interopRequireDefault(_db);

var _mongoose = __webpack_require__(1);

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
/* 9 */
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
}).catch(err => {
    console.log('error connecting: ', err);
});

exports.default = _mongoose2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const webpack = __webpack_require__(2);

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router', 'isomorphic-fetch', 'babel-polyfill']
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
                presets: ['react', 'es2015']
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

/***/ })
/******/ ])));
//# sourceMappingURL=server.bundle.js.map