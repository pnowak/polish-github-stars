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

	var _users = __webpack_require__(3);

	var _users2 = _interopRequireDefault(_users);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loc = 'https://api.github.com/search/users?q=location:poland';
	var stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

	fetch(stars).then(_status2.default).then(_json2.default).then(function (data) {
	    var users = (0, _users2.default)(data);
	    return users;
	}).then(function (users) {
	    console.log(users);
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
	function filterUsers(data) {
		var users = data.items.filter(function (item, index) {
			for (var i in item) {
				if (i === 'owner') {
					for (var j in item[i]) {
						if (j === 'type' && item[i][j] === 'User') {
							return item[i];
						}
					}
				}
			}
		});

		return users;
	}

	exports.default = filterUsers;

/***/ }
/******/ ]);