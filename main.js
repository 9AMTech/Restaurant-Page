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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* GENERAL STYLES */\\n\\nhtml {\\n    /* background-color: rgb(145, 91, 70); */\\n    /* background-color: rgb(143, 93, 72); */\\n    /* background-color: rgb(155, 104, 80); */\\n    background-color: rgb(89, 46, 17);\\n    height: 100%;\\n    overflow: hidden;\\n}\\n\\nbody {\\n    margin: 0;\\n    height: 100%;\\n    overflow: auto;\\n    \\n}\\n\\n#content {\\n    margin: 0 17% 0;\\n    padding: 10% 5%;\\n}\\n\\nheader {\\n    display: inline-flex;\\n    width: 100%;\\n    height: 95px;\\n    /* Light Brown Color */\\n    /* background-color: rgba(187, 93, 31, 0.764);\\n    color: black; */\\n    \\n    /* Dark Brown Color */\\n    background-color: rgb(89, 46, 17);\\n    color: white;\\n}\\n\\nbody {\\n    background-color: rgb(255, 207, 179);\\n}\\n\\np {\\n    font-size: 20px;\\n}\\n\\ntable {\\n    font-size: 20px;\\n}\\n\\nimg {\\n    width: 250px;\\n    height: 200px;\\n}\\n\\n\\n/* NAV STYLES */\\n.logo {\\n    padding-left: 10%;\\n    flex-basis: 70%;\\n    font-size: 30px;\\n    letter-spacing: 4px;\\n}\\n\\n.logo-text {\\n    font-size: 30px;\\n}\\n\\n.nav-bar {\\n    margin: 0 auto;\\n    align-self: center;\\n    flex-basis: 30%;\\n}\\n\\n.nav-bar ul {\\n    display: inline-flex;\\n    list-style-type: none;\\n    gap: 30px;\\n    padding: 0 10vw 0 0;\\n}\\n\\n.nav-bar ul li {\\n    cursor: pointer;\\n    text-align: center;\\n    padding: 38px 0;\\n    font-size: 17px;\\n    font-weight: 900;\\n    width: 105px;\\n    letter-spacing: 2px;\\n}\\n\\n.active {\\n    background-color: rgb(255, 207, 179);\\n    color: black;\\n}\\n\\n/* HOME STYLES */\\n\\n.grid-home {\\n    display: grid;\\n    background-color: white;\\n    border: 3px solid black;\\n    padding: 7% 3%;\\n    font-family: sans-serif;\\n    align-items: center;\\n    grid-template-columns: repeat(2, 50%);\\n    grid-template-rows: 100px auto 200px;\\n    text-align: -webkit-center;\\n}\\n\\n.quote-section {\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n}\\n\\n.quote-paragraph {\\n    font-size: 37px;\\n    font-family: Garamond, serif;\\n    font-style: italic;\\n}\\n\\n.logo-section {\\n    grid-column-start: 1;\\n    grid-column-end: 2;\\n}\\n\\n.logo-section-image {\\n    width: 295px;\\n    height: 155px;\\n}\\n\\n.para-section {\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n}\\n\\n.para-paragraph {\\n    padding: 0 15px;\\n}\\n\\n.hours-table-title {\\n    margin-top: 0;\\n}\\n\\ntable {\\n    border-spacing: 40px 5px;\\n}\\n\\n/* MENU STYLES */\\n.grid-menu {\\n    display: grid;\\n    background-color: white;\\n    border: 3px solid black;\\n    padding: 5%;\\n    font-family: sans-serif;\\n    align-items: center;\\n    grid-template-columns: repeat(2, 50%);\\n    grid-template-rows: repeat(3, 250px);\\n    text-align: -webkit-center;\\n}\\n\\n.image-section-1 {\\n    grid-row-start: 1;\\n    grid-row-end: 2;\\n    grid-column-start: 2;\\n    grid-column-end: 3;\\n}\\n\\n.image-section-2 {\\n    grid-row-start: 2;\\n    grid-row-end: 3;\\n}\\n\\n.contact-wrapper {\\n    background-color: white;\\n    border: 3px solid black;\\n    padding: 5%;\\n    font-family: sans-serif;\\n}\\n\\n.contact-wrapper h1 {\\n    font-size: 28px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-8---restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home.js */ \"./src/js/home.js\");\n/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _js_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact.js */ \"./src/js/contact.js\");\n\n\n\n\n\n// Creating the Nav Bar\nconst navBar = (function () {\n\n    // Defining Variables\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n    const logo = document.createElement('section');\n    const logoText = document.createElement('p');\n    const nav = document.createElement('nav');\n    const navBar = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const contact = document.createElement('li');\n\n    // Manipulating Nodes\n    // Logo Stuff\n    logo.className = 'logo';\n    logoText.innerText = '𝔹𝕣𝕖𝕒𝕜-𝕒-𝔹𝕒𝕣';\n    logoText.className = 'logo-text';\n\n    // Nav Bar Buttons\n    nav.classList = 'nav-bar';\n    home.textContent = 'HOME';\n    menu.textContent = 'MENU';\n    contact.textContent = 'CONTACT';\n\n    // Appending elements in correct order\n    body.prepend(header);\n    header.append(logo, nav);\n    logo.appendChild(logoText);\n    nav.append(navBar)\n    navBar.append(home, menu, contact);\n\n    return {\n        home: home,\n        menu: menu,\n        contact: contact\n    }\n})();\n\n\n// Creating event listeners for each button, then pulls the div content from each respective module\n// On click, will delete div id=content and render in the new content\nconst navLogic = (function () {\n    const pageList = [navBar.home, navBar.menu, navBar.contact];\n\n    // Adding default actions to happen when the page loads.\n    const content = document.querySelector('#content');\n    let counter = 0;\n    (0,_js_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHome)(counter);\n\n    navBar.home.className = 'active';\n    const activePage = (currentPage) => {\n        for (let p = 0; p < 3; p++) {\n            if (pageList[p].classList.contains('active') == true) {\n                pageList[p].classList.toggle('active');\n            }\n        }\n        currentPage.className = 'active';\n    }\n\n\n    navBar.home.addEventListener('click', () => {\n        ;(0,_js_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHome)();\n        activePage(navBar.home);\n    });\n\n    navBar.menu.addEventListener('click', () => {\n        (0,_js_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenu)();\n        activePage(navBar.menu);\n    });\n\n    navBar.contact.addEventListener('click', () => {\n        (0,_js_contact_js__WEBPACK_IMPORTED_MODULE_3__.generateContact)();\n        activePage(navBar.contact);\n    });\n\n\n    return {\n        counter: counter,\n    }\n\n})();\n\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateContact\": () => (/* binding */ generateContact)\n/* harmony export */ });\n// This module will fill #content with all information regarding contact information \nfunction generateContact() {\n    // Creating Elements\n    const content = document.querySelector('#content');\n    const contactWrapper = document.createElement('section')\n    const title = document.createElement('h1');\n    const daMan = document.createElement('p');\n    const address = document.createElement('p');\n    const phoneNumber = document.createElement('p');\n\n    // Manipulating Elements\n    contactWrapper.className = 'contact-wrapper';\n    title.textContent = 'Get in Touch';\n    daMan.textContent = \"Jason Bartholomew Hall\"\n    address.textContent = \"11275 E Via Linda, Scottsdale AZ 85259\";\n    phoneNumber.textContent = '(973)-356-1208';\n\n    // Clearning old content\n    content.innerHTML = '';\n\n    // Appending Elements\n    content.append(contactWrapper);\n    contactWrapper.append(title, daMan, address, phoneNumber);\n}\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHome\": () => (/* binding */ generateHome)\n/* harmony export */ });\n// This file contains the content to be generated when the home button is clicked\nfunction generateHome(counter) {\n    // Defining Variables\n    const content = document.querySelector('#content');\n    // We want there to be default data, so if counter != 0, it'll clear it.\n    // When the function runs once it'll make this content able to be deleted\n    if (counter !== 0) {\n        content.innerHTML = '';\n    }\n    const gridWrapper = document.createElement('section');\n    const logoSection = document.createElement('section');\n    const logoImage = document.createElement('img');\n    const logoLink = '../src/assets/images/break-a-bar-logo.jpg';\n    const paraSection = document.createElement('section');\n    const paraParagraph = document.createElement('p');\n    const paraText =\n        \"\\\n            Break-a-Bar is a small mom and pop company founded in Arizona.\\\n        Break-a-Bar's most experienced chocolate craftsman is Jason Hall,\\\n        who hails from a long lineage of legendary chocolateers from Eastern Europe.\\\n        Every bar made from his hands is made with promise.\";\n\n    const quoteSection = document.createElement('section');\n    const quoteParagraph = document.createElement('p');\n    const quoteText = \"\\\"It'll be a clean snap, or your money back!\\\"\";\n\n    const hoursSection = document.createElement('section');\n    const hoursTableTitle = document.createElement('p');\n    const hoursTableTitleText = 'Hours';\n\n    // Goal is to create a 2 x 4 Table\n    const hoursTable = document.createElement('table');\n    const hoursColumn1 = ['M', 'T', 'W', 'Th'];\n    const hoursColumn2 = ['10 AM - 3 PM'];\n    let hoursTableRows = [];\n    let hoursTableDataColumn1 = [];\n    let hoursTableDataColumn2 = [];\n\n    // Making a loop to fill it with the respective elements\n    for (let i = 0; i <= 3; i++) {\n        // Fills hoursTableRows with 4 tr elements\n        hoursTableRows[i] = document.createElement('tr');\n\n        // These lines fill hoursTableDataColumn1/2 with td elements\n        hoursTableDataColumn1[i] = document.createElement('td');\n        hoursTableDataColumn2[i] = document.createElement('td');\n\n        // These lines put the correct data into each columns td\n        hoursTableDataColumn1[i].innerText = hoursColumn1[i];\n        hoursTableDataColumn2[i].innerText = hoursColumn2[0];\n\n        // These lines put the correct column data in the correct rows\n        hoursTable.appendChild(hoursTableRows[i]);\n        hoursTableRows[i].appendChild(hoursTableDataColumn1[i]);\n        hoursTableRows[i].appendChild(hoursTableDataColumn2[i]);\n    }\n\n\n    // Manipulating Elements\n    // The Grid\n    gridWrapper.className = 'grid-home';\n    // Logo Stuff\n    logoSection.className = 'logo-section';\n    logoImage.className = 'logo-section-image';\n    logoImage.setAttribute('src', logoLink);\n\n    // Paragraph Stuff\n    paraSection.className = 'para-section';\n    paraParagraph.className = 'para-paragraph';\n    paraParagraph.textContent = paraText;\n\n    // Quote Stuff\n    quoteSection.className = 'quote-section';\n    quoteParagraph.className = 'quote-paragraph';\n    quoteParagraph.textContent = quoteText;\n\n    // Hours Stuff\n    hoursSection.className = 'hours-section';\n    hoursTable.className = 'hours-table';\n    hoursTableTitle.className = 'hours-table-title';\n    hoursTableTitle.textContent = hoursTableTitleText;\n\n    // Updating Counter\n    counter++;\n\n    // Appending elements in correct order\n    content.appendChild(gridWrapper);\n    gridWrapper.appendChild(paraSection);\n    paraSection.appendChild(paraParagraph);\n    gridWrapper.appendChild(quoteSection);\n    quoteSection.appendChild(quoteParagraph);\n    gridWrapper.appendChild(logoSection);\n    logoSection.appendChild(logoImage);\n    gridWrapper.appendChild(hoursSection);\n    hoursSection.appendChild(hoursTableTitle);\n    hoursSection.appendChild(hoursTable);\n\n}\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/js/home.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n// This module will create a 2*3 grid containing information \n// There will be 3 blocks of information on the items\n// There will be 3 titles and 3 paragraphs\n// There will be 3 accompanying images\nfunction generateMenu() {\n    // Creating Elements \n    // Sections\n    const content = document.querySelector('#content');\n    const grid = document.createElement('section');\n    const infoSection1 = document.createElement('section');\n    const infoSection2 = document.createElement('section');\n    const infoSection3 = document.createElement('section');\n    const imageSection1 = document.createElement('section');\n    const imageSection2 = document.createElement('section');\n    const imageSection3 = document.createElement('section');\n\n    // Info\n    const title1 = document.createElement('h2');\n    const title2 = document.createElement('h2');\n    const title3 = document.createElement('h2');\n    const paragraph1 = document.createElement('p');\n    const paragraph2 = document.createElement('p');\n    const paragraph3 = document.createElement('p');\n\n    // Images\n    const image1 = document.createElement('img');\n    const image2 = document.createElement('img');\n    const image3 = document.createElement('img');\n    const imageLink1 = '../src/assets/images/break-a-bar.jpeg';\n    const imageLink2 = '../src/assets/images/kick-kat.jpg';\n    const imageLink3 = '../src/assets/images/dog-poop-emoji.jpg';\n\n    const textParagraph1 =\n        \"The Lifeline of Break-a-Bar. This is the bar that started it all,\\\n    a single bite out of this will make you feel the Lord's warm embrace.\";\n\n    const textParagraph2 =\n        \"The Kick Kat is our spin on Hershey's Kit Kat chocolate bar.\\\n    We did it better. Try it. We dare you.\";\n\n    const textParagraph3 =\n        \"Watcha Doin? Eatin chocolate! Where'd you get it? The Doggy Dropped It!\\\n    Ali's Own is a delicious moist brownie with a funny take!\";\n\n    // Manipulating Element Attributes\n\n    // Sections\n    grid.className = 'grid-menu';\n    infoSection1.className = 'info-section-1';\n    infoSection2.className = 'info-section-2';\n    infoSection3.className = 'info-section-3';\n    imageSection1.className = 'image-section-1';\n    imageSection2.className = 'image-section-2';\n    imageSection3.className = 'image-section-3';\n\n    // Info\n    title1.textContent = 'Break-a-Bar'\n    title2.textContent = 'Kick Kat'\n    title3.textContent = \"Ali's Own\";\n    paragraph1.textContent = textParagraph1;\n    paragraph2.textContent = textParagraph2;\n    paragraph3.textContent = textParagraph3;\n\n    // Images\n    image1.setAttribute('src', imageLink1);\n    image2.setAttribute('src', imageLink2);\n    image3.setAttribute('src', imageLink3);\n\n    // Clearing old content\n    content.innerHTML = '';\n\n    // Appending Elements in Correct Order\n    content.append(grid);\n    grid.append(infoSection1, infoSection2, infoSection3,\n        imageSection1, imageSection2, imageSection3);\n    infoSection1.append(title1, paragraph1);\n    infoSection2.append(title2, paragraph2);\n    infoSection3.append(title3, paragraph3);\n    imageSection1.append(image1);\n    imageSection2.append(image2);\n    imageSection3.append(image3);\n\n}\n\n\n\n//# sourceURL=webpack://project-8---restaurant-page/./src/js/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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