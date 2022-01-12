/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkempty_project"] = self["webpackChunkempty_project"] || []).push([["main"],{

/***/ "./src/cart/index.js":
/*!***************************!*\
  !*** ./src/cart/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* reexport safe */ _src_cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart)\n/* harmony export */ });\n/* harmony import */ var _src_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/cart.js */ \"./src/cart/src/cart.js\");\n\n\n//# sourceURL=webpack://empty-project/./src/cart/index.js?");

/***/ }),

/***/ "./src/cart/src/cart.js":
/*!******************************!*\
  !*** ./src/cart/src/cart.js ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/src/cart/src/cart.js: Missing semicolon. (15:14)\\n\\n\\u001b[0m \\u001b[90m 13 |\\u001b[39m   }\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 15 |\\u001b[39m   closeModal() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m     domElements()\\u001b[33m.\\u001b[39m$sideCartOverlay\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39mremove(\\u001b[32m\\\"active\\\"\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 |\\u001b[39m   }\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 |\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Parser.raiseWithData (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Parser.raise (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:495:17)\\n    at Parser.semicolon (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:3520:10)\\n    at Parser.parseExpressionStatement (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13686:10)\\n    at Parser.parseStatementContent (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13277:19)\\n    at Parser.parseStatement (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13139:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13728:25)\\n    at Parser.parseBlockBody (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13719:10)\\n    at Parser.parseBlock (/Users/cristiandussan/Documents/code/gradiweb/gradi/side-cart/side-cart/node_modules/@babel/parser/lib/index.js:13703:10)\");\n\n//# sourceURL=webpack://empty-project/./src/cart/src/cart.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _cart_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/index.js */ \"./src/cart/index.js\");\n/* harmony import */ var _utils_dom_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom-elements.js */ \"./src/utils/dom-elements.js\");\n\n\nconsole.log(\"hello gradiweb!\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {});\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

/***/ }),

/***/ "./src/utils/dom-elements.js":
/*!***********************************!*\
  !*** ./src/utils/dom-elements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domElements\": () => (/* binding */ domElements)\n/* harmony export */ });\nconst domElements = () => {\n  const elements = {\n    $sideCartOverlay: document.querySelector(\"#sideCartOverlay\"),\n    $sideCartCloseButton: document.querySelector(\"#sideCartCloseButton\"),\n    $cartIconBubble: document.querySelector('#sideCartCloseButton'),\n    $sideCartContent: document.querySelector('#sideCartContent')\n  };\n  return elements;\n};\n\n//# sourceURL=webpack://empty-project/./src/utils/dom-elements.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/styles.scss?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/styles.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);