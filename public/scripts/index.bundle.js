/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ \"./src/animations.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\nlet { inView } = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nclass Element {\r\n    constructor(elementToAnimate, direction) {\r\n        this.constansts = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; \r\n        this.animation = this._getAnimationObj(direction);\r\n        this.element = elementToAnimate;\r\n        this.originalStyle = {...elementToAnimate.style};\r\n        this.initializePosition();\r\n    }\r\n\r\n    initializePosition() {\r\n        this.element.style.transition = this.animation.apply.transition;\r\n\r\n        const keys = Object.keys(this.animation.initial);\r\n        keys.forEach(key => {\r\n            let value = this.animation.initial[key] instanceof Function ? this.animation.initial[key]() \r\n                : this.animation.initial[key];\r\n            this.element.style.transition = `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TRANSITION_TIME}s linear`,    \r\n            this.element.style[key] = value;\r\n        })\r\n        if(inView(this.element)) {\r\n            this.animate();\r\n        }\r\n    }\r\n\r\n    animate() {\r\n        const keys = Object.keys(this.animation.apply);\r\n        keys.forEach(key => {\r\n            let value;\r\n        value = this.animation.apply[key] instanceof Function ? this.animation.apply[key](this.originalStyle[key]) \r\n            : this.animation.apply[key];   \r\n        this.element.style[key] = value;\r\n        })\r\n    }\r\n\r\n    initial() {\r\n        const keys = Object.keys(this.animation.initial);\r\n        keys.forEach(key => {\r\n            let value;\r\n        value = this.animation.initial[key] instanceof Function ? this.animation.initial[key](this.originalStyle[key]) \r\n            : this.animation.initial[key];   \r\n        this.element.style[key] = value;\r\n        })\r\n    }\r\n\r\n    _getAnimationObj(direction) {\r\n        if(typeof direction !== 'string') throw 'direction value must be of type string';\r\n\r\n        let result = 'random';\r\n        if(direction === '') return result;\r\n\r\n        result = _animations__WEBPACK_IMPORTED_MODULE_1__[\"default\"][direction];\r\n        if(!result) throw 'animation direction provided does not exist';\r\n        \r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Element.js?");

/***/ }),

/***/ "./src/animate-simple.js":
/*!*******************************!*\
  !*** ./src/animate-simple.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\n\r\n\r\nconst { inView, getHrefTarget } = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst animateSimple = {\r\n\r\n    smoothScroll: function (e) {\r\n        e.preventDefault();\r\n        const scrollToTarget = getHrefTarget(e);\r\n         \r\n    \r\n        const targetElement = document.getElementById(scrollToTarget);\r\n        targetElement.scrollIntoView({ behavior: \"smooth\", block: 'start' })\r\n    },\r\n\r\n    // TODO: add support for objects\r\n    animate: function(options) {\r\n        if(!options instanceof Array) throw 'options must be of type array';\r\n        const elementsToAnimate = options;\r\n    \r\n        const { handleScrollAnimation, smoothScrollToAnchor, initializeAnimationPositions } = eventHandlers();\r\n    \r\n        window.onload = initializeAnimationPositions;\r\n        window.onscroll = handleScrollAnimation;\r\n    \r\n        /**\r\n         * @returns {Object} event handler functions \r\n         */\r\n        function eventHandlers() {\r\n            const { getNewElement } = elements();\r\n            let elementInstances = [];\r\n            /**\r\n             * @returns {void}\r\n             */\r\n            function handleScrollAnimation(e) {\r\n                (function animateInstances() {\r\n                    elementInstances.forEach(element => {\r\n                        if(inView(element.element)) {\r\n                            element.animate();\r\n                        } else {\r\n                            element.initial();\r\n                        }\r\n                    })\r\n                })()\r\n            }\r\n    \r\n            function initializeAnimationPositions() {\r\n                elementsToAnimate.forEach(elementToAnimate => {\r\n                    const elementSelector = Array.isArray(elementToAnimate) ?  elementToAnimate[0]: elementToAnimate;\r\n                    const animationDirection = Array.isArray(elementToAnimate) && elementToAnimate[1] ? elementToAnimate[1] : '';\r\n                    const elements = getNewElement(elementSelector);\r\n    \r\n                    if(!elements.forEach) {\r\n                        let element = new _Element__WEBPACK_IMPORTED_MODULE_1__[\"default\"](elementToAnimate, animationDirection);\r\n                        elementInstances = [element];\r\n                    } else {\r\n                        elements.forEach(each => {\r\n                            let element = new _Element__WEBPACK_IMPORTED_MODULE_1__[\"default\"](each, animationDirection)\r\n                            elementInstances = [...elementInstances, element];\r\n                        });\r\n                    }\r\n                })\r\n    \r\n                console.log(elementInstances);\r\n                \r\n            }\r\n    \r\n            function smoothScrollToAnchor(e) {\r\n                e.preventDefault();\r\n                const scrollToTarget = getHrefTarget(e);\r\n                \r\n            \r\n                const targetElement = document.getElementById(scrollToTarget);\r\n                targetElement.scrollIntoView({ behavior: \"smooth\", block: 'start' })\r\n            }\r\n            return {\r\n                handleScrollAnimation,\r\n                smoothScrollToAnchor,\r\n                initializeAnimationPositions\r\n            }\r\n        }\r\n    \r\n        function elements() {    \r\n            /**\r\n             * @param {String} name element selector\r\n             * @returns {Element | Element[]} return nodelist if more than one element found\r\n             */\r\n            const getNewElement = (name) => {\r\n                const elements = document.querySelectorAll(name);\r\n                if (elements.length === 1) return elements[0];\r\n                return elements;\r\n            }\r\n            return {\r\n                getNewElement,\r\n            }\r\n        }\r\n    \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (animateSimple);\n\n//# sourceURL=webpack:///./src/animate-simple.js?");

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nlet getRandomBool = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getRandomBool;\r\n/**\r\n * each animation property has initial and apply objects.\r\n * \r\n * initial is to initialize the position before animation so that\r\n * user doesn't have to touch css.\r\n * \r\n * apply contains the desitination values. properties could be functions or\r\n * strings. functions accept original value property if user already had set\r\n * a value for the corresponing property in his css to avoid conflictions.\r\n */\r\nconst animations = {\r\n    '<-->': {\r\n        apply: { \r\n            transform: (originalValue) => `translateX(${originalValue || '0'})`,\r\n            opacity: '1'\r\n        },\r\n        initial: {\r\n            transform: () => `translateX(${getRandomBool() && '-'}${_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MOVEMENT_DISTANCE}px)`,\r\n            opacity: '0',\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (animations);\n\n//# sourceURL=webpack:///./src/animations.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\r\n    IN_VIEW: -50, // top - vh\r\n    MOVEMENT_DISTANCE: 50,\r\n    TRANSITION_TIME: '0.3'\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\n/* harmony import */ var _animate_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-simple */ \"./src/animate-simple.js\");\n\r\n\r\n\r\n\r\nmain();\r\n\r\n\r\nconst elementsToAnimate = [['.project__img', '<-->']];\r\n_animate_simple__WEBPACK_IMPORTED_MODULE_1__[\"default\"].animate(elementsToAnimate);\r\n/**\r\n * main function called when module is called\r\n * @public\r\n * @returns {void}\r\n */\r\nfunction main() {\r\n    const { projectMenuLinks } = elements();\r\n    const { handleScrollAnimation, smoothScrollToAnchor, initializeAnimationPositions } = eventHandlers();\r\n\r\n    // window.onload = initializeAnimationPositions;\r\n    // window.onscroll = handleScrollAnimation;\r\n    projectMenuLinks.forEach(each => each.addEventListener('click', smoothScrollToAnchor));\r\n}\r\n\r\n/**\r\n * @returns {Object} an object of elements\r\n */\r\nfunction elements() {\r\n    const projectMenuLinks = document.querySelectorAll('.header__menu__link');\r\n    const projectsSection = document.getElementById('projects');\r\n    const projectsSectionHeader = projectsSection.querySelector('.projects__header');\r\n    const projectsSectionImgs = projectsSection.querySelectorAll('img');\r\n\r\n    /**\r\n     * @param {String} name element selector\r\n     * @returns {Element | Element[]} return nodelist if more than one element found\r\n     */\r\n    const getNewElement = (name) => {\r\n        const elements = document.querySelectorAll(name);\r\n        if (elements.length === 1) return elements[0];\r\n        return elements;\r\n    }\r\n\r\n    return {\r\n        projectMenuLinks,\r\n        projectsSection,\r\n        projectsSectionHeader,\r\n        projectsSectionImgs,\r\n        getNewElement,\r\n    }\r\n}\r\n\r\n/**\r\n * @returns {Object} event handler functions \r\n */\r\nfunction eventHandlers() {\r\n\r\n    function smoothScrollToAnchor(e) {\r\n        e.preventDefault();\r\n        const scrollToTarget = getHrefTarget(e);\r\n         \r\n    \r\n        const targetElement = document.getElementById(scrollToTarget);\r\n        targetElement.scrollIntoView({ behavior: \"smooth\", block: 'start' })\r\n    }\r\n    return {\r\n        smoothScrollToAnchor,\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return utils; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n/**\r\n * contains helper functions\r\n * @returns {Object} \r\n */\r\nfunction utils() {\r\n    const viewHeight = window.innerHeight;\r\n    /**\r\n     * takes an element and checks of its in view\r\n     * @param {Object} element\r\n     * @returns {Boolean}\r\n     */\r\n    function inView(element, diff = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IN_VIEW) {\r\n        return element.getBoundingClientRect().top - viewHeight < diff ? true\r\n            : false;\r\n    }\r\n    /**\r\n     * returns the href target stripped\r\n     * @param {Event} e takes an event object\r\n     * @returns {String}\r\n     */\r\n    function getHrefTarget(e) {\r\n        const hrefParts = e.target.href.split('/');\r\n        let scrollToTarget = hrefParts[hrefParts.length - 1];\r\n        if (scrollToTarget.includes('#')) scrollToTarget = scrollToTarget.split('#')[1]\r\n        return scrollToTarget;\r\n    }\r\n\r\n    function getRandomBool() {\r\n        return Math.floor(Math.random() * 2) && true;\r\n    }\r\n\r\n    return {\r\n        inView,\r\n        getHrefTarget,\r\n        getRandomBool\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });