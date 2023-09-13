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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    // 制御クラスのインスタンス化\n    const app = new App3();\n    // 初期化\n    app.init();\n    app.render();\n}, false);\nclass App3 {\n    //カメラ定義\n    static get CAMERA_PARAM() {\n        return {\n            fovy: 60,\n            aspect: window.innerWidth / window.innerHeight,\n            near: 0.1,\n            far: 10.0,\n            x: 0.0,\n            y: 0.0,\n            z: 5.0,\n            lookAt: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.0, 0.0, 0.0),\n        };\n    }\n    static get RENDERER_PARAM() {\n        return {\n            clearColor: 0x666666,\n            width: window.innerWidth,\n            height: window.innerHeight,\n        };\n    }\n    static get MATERIAL_PARAM() {\n        return {\n            color: 0x3399ff,\n        };\n    }\n    init() {\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n        this.renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(App3.RENDERER_PARAM.clearColor));\n        this.renderer.setSize(App3.RENDERER_PARAM.width, App3.RENDERER_PARAM.height);\n        const wrapper = document.querySelector('.webgl');\n        if (wrapper) {\n            wrapper.appendChild(this.renderer.domElement);\n        }\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(App3.CAMERA_PARAM.fovy, App3.CAMERA_PARAM.aspect, App3.CAMERA_PARAM.near, App3.CAMERA_PARAM.far);\n        this.camera.position.set(App3.CAMERA_PARAM.x, App3.CAMERA_PARAM.y, App3.CAMERA_PARAM.z);\n        this.camera.lookAt(App3.CAMERA_PARAM.lookAt);\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1.0, 1.0, 1.0);\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial(App3.MATERIAL_PARAM);\n        this.box = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\n        this.scene.add(this.box);\n    }\n    render() {\n        requestAnimationFrame(() => {\n            this.render();\n        });\n        this.box.rotation.x += 0.01;\n        this.box.rotation.y += 0.01;\n        this.renderer.render(this.scene, this.camera);\n    }\n}\n\n\n//# sourceURL=webpack://001/./src/app.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;