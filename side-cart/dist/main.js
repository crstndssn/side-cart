/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart/index.js":
/*!***************************!*\
  !*** ./src/cart/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* reexport safe */ _src_cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart)\n/* harmony export */ });\n/* harmony import */ var _src_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/cart.js */ \"./src/cart/src/cart.js\");\n\n\n//# sourceURL=webpack://empty-project/./src/cart/index.js?");

/***/ }),

/***/ "./src/cart/src/cart.js":
/*!******************************!*\
  !*** ./src/cart/src/cart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom-elements.js */ \"./src/utils/dom-elements.js\");\n\nclass Cart {\n  // async update() {\n  //   domElements().$sideCartContent.innerHTML = \"\"\n  //   const html = await API.updateShopifySection('side-cart')\n  //   domElements().$sideCartContent.innerHTML = html\n  // }\n  openModal = () => {\n    console.log('heee');\n    (0,_utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.domElements)().$sideCartOverlay.classList.add(\"active\");\n    console.log('heee');\n  };\n\n  closeModal() {\n    (0,_utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.domElements)().$sideCartOverlay.classList.remove(\"active\");\n  }\n\n}\n\n//# sourceURL=webpack://empty-project/./src/cart/src/cart.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _cart_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/index.js */ \"./src/cart/index.js\");\n/* harmony import */ var _utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom-elements.js */ \"./src/utils/dom-elements.js\");\n\n // console.log(\"hello gradiweb!\");\n\nconsole.log(\"epa\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log((0,_utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__.domElements)());\n  console.log('epa');\n  const cart = new _cart_index_js__WEBPACK_IMPORTED_MODULE_2__.Cart();\n  (0,_utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__.domElements)().$cartIconBubble.addEventListener(\"click\", cart.openModal);\n  (0,_utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__.domElements)().$sideCartCloseButton.addEventListener(\"click\", cart.closeModal);\n});\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

/***/ }),

/***/ "./src/utils/dom-elements.js":
/*!***********************************!*\
  !*** ./src/utils/dom-elements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domElements\": () => (/* binding */ domElements)\n/* harmony export */ });\nconst domElements = () => {\n  const elements = {\n    $sideCartOverlay: document.querySelector(\"#sideCartOverlay\"),\n    $sideCartCloseButton: document.querySelector(\"#sideCartCloseButton\"),\n    $cartIconBubble: document.querySelector('#cart-icon-bubble'),\n    $sideCartContent: document.querySelector('#sideCartContent')\n  };\n  return elements;\n};\n\n//# sourceURL=webpack://empty-project/./src/utils/dom-elements.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/styles.scss?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;