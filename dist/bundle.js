/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _urls = __webpack_require__(1);

	var _urls2 = _interopRequireDefault(_urls);

	var _users = __webpack_require__(2);

	var _users2 = _interopRequireDefault(_users);

	var _get = __webpack_require__(3);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loc = 'https://api.github.com/search/users?q=location:poland';
	var stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

	(0, _get2.default)(loc).then(function (data) {
	    var url = (0, _urls2.default)(data);
	    return url;
	}).then(function (url) {
	    var user = (0, _users2.default)(url);
	    return user;
	}).then(function (user) {
	    console.log(user);
	}).catch(function (error) {
	    console.log('Request failed', error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function urls(data) {
		var urlsArray = [];

		data.items.filter(function (item, index) {
			for (var i in item) {
				if (i === 'url') {
					urlsArray.push(item[i]);
				}
			}
		});

		return urlsArray;
	}

	exports.default = urls;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _get = __webpack_require__(3);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function users(data) {
		return data.forEach(function (item, index) {
			console.log(item);
			(0, _get2.default)(item);
		});
	}

	exports.default = users;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function get(url) {
	    return new Promise(function (succeed, fail) {
	        var req = new XMLHttpRequest();

	        req.open('GET', url, true);

	        req.addEventListener('load', function () {
	            if (req.status < 400) {
	                succeed(JSON.parse(req.responseText));
	            } else {
	                fail(new Error('Request failed: ' + req.statusText));
	            }
	        });

	        req.addEventListener('error', function () {
	            fail(new Error('Network error'));
	        });

	        req.send(null);
	    });
	}

	exports.default = get;

/***/ }
/******/ ]);