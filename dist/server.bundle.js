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

module.exports = require("react");

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
const SourceMapSupport = __webpack_require__(8);
SourceMapSupport.install();

const express = __webpack_require__(0);
const bodyParser = __webpack_require__(9);

const api = __webpack_require__(10);

let app = express();

//middleware
app.use(express.static('static'));
app.use(bodyParser.json());

//routes
app.use('/api', api);
app.use('/', _renderedPageRouter2.default);

//dev test
if (process.env.NODE_ENV !== 'production') {
    const webpack = __webpack_require__(2);
    const webpackDevMiddleware = __webpack_require__(11);
    const webpackHotMiddleware = __webpack_require__(12);

    const config = __webpack_require__(13);
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _server2 = _interopRequireDefault(_server);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _HelloWorld = __webpack_require__(6);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _template = __webpack_require__(7);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderedPageRouter = new _express2.default();

renderedPageRouter.get('/', (req, res) => {
    const html = _server2.default.renderToString(_react2.default.createElement(_HelloWorld2.default, null));
    res.send((0, _template2.default)(html));
});

exports.default = renderedPageRouter;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HelloWorld;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HelloWorld() {
    return _react2.default.createElement(
        'h1',
        null,
        'HelloWorld'
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = template;
function template(body, initialState) {

    return `<!DOCTYPE HTML>
<html>
<head>
    <meta charset = "UTF-8" />
    <title>Genesis</title>
    <meta name= "viewport" content= "width=device-width, initial-scale=1.0">
</head>

<body>
    <div id ="contents">${body}</div>
    <!-- this is where our component will appear -->
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; </script>
    <script src="/vendor.bundle.js"></script>
    <script src="/app.bundle.js"></script>
</body>
</html>
`;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const express = __webpack_require__(0);
const router = express.Router();

const games = [{
    _id: 1,
    owner: 'logan',
    title: 'Best Game Ever' }, {
    _id: 2,
    owner: 'zach',
    title: 'Jeez i suck'
}, {
    _id: 3,
    owner: 'derek',
    title: 'Where am I'
}];

router.get('/games', (req, res, next) => {
    if (games) {
        res.json({ records: games });
    } else {
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    }
});

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const webpack = __webpack_require__(2);

module.exports = {
    entry: {
        app: ['./client/Client.jsx'],
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'babel-polyfill']
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