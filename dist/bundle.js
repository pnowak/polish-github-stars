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

	var _status = __webpack_require__(1);

	var _status2 = _interopRequireDefault(_status);

	var _json = __webpack_require__(2);

	var _json2 = _interopRequireDefault(_json);

	var _urls = __webpack_require__(3);

	var _urls2 = _interopRequireDefault(_urls);

	var _fetchUrls = __webpack_require__(4);

	var _fetchUrls2 = _interopRequireDefault(_fetchUrls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loc = 'https://api.github.com/search/users?q=location:poland';
	var stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

	fetch(loc).then(_status2.default).then(_json2.default).then(function (data) {
	    var url = (0, _urls2.default)(data);
	    return url;
	}).then(function (url) {
	    var fetchUrl = (0, _fetchUrls2.default)(url);
	    return fetchUrl;
	}).then(function (fetchUrl) {
	    console.log(fetchUrl);
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
	function status(response) {
		if (response.status >= 200 && response.status < 300) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	}

	exports.default = status;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function json(response) {
	  return response.json();
	}

	exports.default = json;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _status = __webpack_require__(1);

	var _status2 = _interopRequireDefault(_status);

	var _json = __webpack_require__(2);

	var _json2 = _interopRequireDefault(_json);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchUrls(data) {
		return data.forEach(function (url, index) {
			fetch(url);
		});
	}

	exports.default = fetchUrls;

/***/ }
/******/ ]);