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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar Nothing = __webpack_require__(2);\n\nconsole.log('wasasbi');\n\nNothing.myfun();//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9hcHAuanN4PzM1MWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDOztBQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUV2QixPQUFPLENBQUMsS0FBSyxFQUFFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTm90aGluZyA9IHJlcXVpcmUoJy4vTm90aGluZycpO1xuXG5jb25zb2xlLmxvZygnd2FzYXNiaScpO1xuXG5Ob3RoaW5nLm15ZnVuKCk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvYXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar Nothing = {\n  myfun: function myfun() {\n    console.log('this does nothing');\n  }\n};\n\nmodule.exports = Nothing;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9Ob3RoaW5nLmpzeD9jMGY1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxPQUFPLEdBQUc7QUFDWixPQUFLLEVBQUMsaUJBQVc7QUFDZixXQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7R0FDbEM7Q0FDRixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5vdGhpbmcgPSB7XG4gIG15ZnVuOmZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGRvZXMgbm90aGluZycpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdGhpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL05vdGhpbmcuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);