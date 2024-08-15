"use strict";
self["webpackHotUpdatelumo_chrome_extension"]("newtab",{

/***/ "./src/pages/Newtab/Countdown/Countdown.jsx":
/*!**************************************************!*\
  !*** ./src/pages/Newtab/Countdown/Countdown.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_useSettingsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/useSettingsStore */ "./src/common/useSettingsStore.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Countdown = function Countdown() {
  var _useSettingsStore = (0,_common_useSettingsStore__WEBPACK_IMPORTED_MODULE_0__.useSettingsStore)(),
    _useSettingsStore2 = _slicedToArray(_useSettingsStore, 1),
    settings = _useSettingsStore2[0];
  // read settings from useSettingsStore
  var countdownText = settings.countdownText,
    countdownEndTime = settings.countdownEndTime,
    backgroundColor = settings.backgroundColor,
    daysColor = settings.daysColor,
    decimalsColor = settings.decimalsColor,
    daysTextColor = settings.daysTextColor,
    deadlineTextColor = settings.deadlineTextColor;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    daysLeft = _useState2[0],
    setDaysLeft = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0000000"),
    _useState4 = _slicedToArray(_useState3, 2),
    percentageString = _useState4[0],
    setPercentageString = _useState4[1];
  var calculatePercentage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    if (!countdownEndTime) return "0000000";
    var now = new Date().getTime();
    var remainingTime = countdownEndTime - now;
    if (remainingTime <= 0) {
      return "0000000";
    }
    var remainingTimeInCurrentDay = remainingTime % 86400000;
    var percentageOfDay = remainingTimeInCurrentDay / 86400000;
    var percentageRounded = (percentageOfDay * 10000000).toFixed(0);
    return percentageRounded.padStart(7, "0");
  }, [countdownEndTime]);

  // I want to print the state of settings after 2 seconds of loading the page
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setTimeout(function () {
      console.log("settings:", settings);
    }, 2000);
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (countdownEndTime) {
      setPercentageString(calculatePercentage());
      var interval = setInterval(function () {
        setPercentageString(calculatePercentage());
      }, 100);
      var calculateDaysLeft = function calculateDaysLeft() {
        var daysLeftCalculated = Math.floor((countdownEndTime - Date.now()) / 1000 / 60 / 60 / 24);
        setDaysLeft(daysLeftCalculated);
      };
      calculateDaysLeft();
      return function () {
        return clearInterval(interval);
      };
    }
  }, [countdownEndTime, calculatePercentage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    className: "flex min-h-screen flex-col items-center justify-center p-24",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "font-bold text-8xl",
    style: {
      color: daysColor
    }
  }, daysLeft), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text-3xl font-semibold font-mono",
    style: {
      color: decimalsColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, percentageString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text-3xl pl-4",
    style: {
      color: daysTextColor
    }
  }, "days"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text-3xl mt-5",
    style: {
      color: deadlineTextColor
    }
  }, countdownText)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d686775c5a24037395ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=newtab.5ae2a68c258ee64dace3.hot-update.js.map