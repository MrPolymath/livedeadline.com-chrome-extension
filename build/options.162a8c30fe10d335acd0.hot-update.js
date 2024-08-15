"use strict";
self["webpackHotUpdatelumo_chrome_extension"]("options",{

/***/ "./src/common/useSettingsStore.js":
/*!****************************************!*\
  !*** ./src/common/useSettingsStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettingsStore": () => (/* binding */ useSettingsStore)
/* harmony export */ });
/* harmony import */ var use_chrome_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-chrome-storage */ "./node_modules/use-chrome-storage/dist/index.es.js");

var SETTINGS_KEY = "settings";
var INITIAL_VALUE = {
  countdownText: "Custom Countdown",
  countdownEndTime: Date.now() + 1000 * 60 * 60 * 24 * 6,
  backgroundColor: "#F6F6EF",
  daysColor: "#f0652f",
  decimalsColor: "#fda942",
  daysTextColor: "#000000",
  deadlineTextColor: "#108AD2"
};
var useSettingsStore = (0,use_chrome_storage__WEBPACK_IMPORTED_MODULE_0__.createChromeStorageStateHookLocal)(SETTINGS_KEY, INITIAL_VALUE);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b1b8e07f30e3dd3ed40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=options.162a8c30fe10d335acd0.hot-update.js.map