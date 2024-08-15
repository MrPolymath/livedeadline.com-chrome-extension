"use strict";
self["webpackHotUpdatelumo_chrome_extension"]("options",{

/***/ "./src/pages/Options/Options.jsx":
/*!***************************************!*\
  !*** ./src/pages/Options/Options.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_useSettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/useSettingsStore */ "./src/common/useSettingsStore.js");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var _LivePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LivePreview */ "./src/pages/Options/LivePreview.tsx");
/* harmony import */ var _ColorPickerSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorPickerSection */ "./src/pages/Options/ColorPickerSection.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Options = function Options() {
  var _useSettingsStore = (0,_common_useSettingsStore__WEBPACK_IMPORTED_MODULE_1__.useSettingsStore)(),
    _useSettingsStore2 = _slicedToArray(_useSettingsStore, 2),
    settings = _useSettingsStore2[0],
    setSettings = _useSettingsStore2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      startDate: settings.startDate || null,
      endDate: settings.endDate || null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    dateValue = _useState2[0],
    setDateValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.time || "00:00"),
    _useState4 = _slicedToArray(_useState3, 2),
    time = _useState4[0],
    setTime = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.countdownText || ""),
    _useState6 = _slicedToArray(_useState5, 2),
    description = _useState6[0],
    setDescription = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.backgroundColor || "#f1f5f9"),
    _useState8 = _slicedToArray(_useState7, 2),
    backgroundColor = _useState8[0],
    setBackgroundColor = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.daysColor || "#000000"),
    _useState10 = _slicedToArray(_useState9, 2),
    daysColor = _useState10[0],
    setDaysColor = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.decimalsColor || "#000000"),
    _useState12 = _slicedToArray(_useState11, 2),
    decimalsColor = _useState12[0],
    setDecimalsColor = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.daysTextColor || "#000000"),
    _useState14 = _slicedToArray(_useState13, 2),
    daysTextColor = _useState14[0],
    setDaysTextColor = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.deadlineTextColor || "#000000"),
    _useState16 = _slicedToArray(_useState15, 2),
    deadlineTextColor = _useState16[0],
    setDeadlineTextColor = _useState16[1];
  var handleDateChange = function handleDateChange(newValue) {
    if (newValue) {
      var startDate = newValue.startDate,
        endDate = newValue.endDate;
      setDateValue({
        startDate: startDate,
        endDate: endDate
      });
      setSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          startDate: startDate,
          endDate: endDate
        });
      });
    }
  };
  var handleTimeChange = function handleTimeChange(event) {
    setTime(event.target.value);
    setSettings(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        time: event.target.value
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dateValue.endDate) {
      var _dateValue$endDate$sp = dateValue.endDate.split("-"),
        _dateValue$endDate$sp2 = _slicedToArray(_dateValue$endDate$sp, 3),
        year = _dateValue$endDate$sp2[0],
        month = _dateValue$endDate$sp2[1],
        day = _dateValue$endDate$sp2[2];
      var _time$split = time.split(":"),
        _time$split2 = _slicedToArray(_time$split, 2),
        hours = _time$split2[0],
        minutes = _time$split2[1];
      var date = new Date(year, month - 1, day, hours, minutes);
      setSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          countdownEndTime: date.getTime()
        });
      });
    }
  }, [dateValue.endDate, time, setSettings]);
  var handleDescriptionChange = function handleDescriptionChange(event) {
    setDescription(event.target.value);
    setSettings(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        countdownText: event.target.value
      });
    });
  };

  // Generic handler for color changes
  var createColorChangeHandler = function createColorChangeHandler(colorKey, setColor) {
    return function (newColor) {
      setColor(newColor);
      setSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, colorKey, newColor));
      });
      setSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          selectedPreset: null // Deactivate any preset
        });
      });
    };
  };
  var handleBackgroundColorChange = createColorChangeHandler("backgroundColor", setBackgroundColor);
  var handleDaysColorChange = createColorChangeHandler("daysColor", setDaysColor);
  var handleDecimalsColorChange = createColorChangeHandler("decimalsColor", setDecimalsColor);
  var handleDaysTextColorChange = createColorChangeHandler("daysTextColor", setDaysTextColor);
  var handleDeadlineTextColorChange = createColorChangeHandler("deadlineTextColor", setDeadlineTextColor);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "min-h-screen flex flex-col md:flex-row relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "md:min-h-screen flex flex-col md:items-center md:justify-center md:p-24 p-12 text-slate-800 bg-slate-100 md:w-1/2 xl:w-2/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl mt-4"
  }, "1. Select a date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full md:w-96 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    asSingle: true,
    useRange: false,
    value: dateValue,
    onChange: handleDateChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl mt-4"
  }, "2. Select a specific time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-sm"
  }, "(optional, defaults to midnight if not set):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "time",
    value: time,
    onChange: handleTimeChange,
    className: "border border-gray-300 rounded-md p-2 mt-2 w-full md:w-96"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl mt-4"
  }, "3. Add a description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    value: description,
    onChange: handleDescriptionChange,
    placeholder: "e.g. My super important event",
    className: "border border-gray-300 rounded-md p-2 mt-2 md:w-96"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "md:fixed md:h-full md:right-0 md:top-0 md:w-1/2 xl:w-1/3 bg-white md:shadow-lg flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ColorPickerSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundColor: backgroundColor,
    setBackgroundColor: handleBackgroundColorChange,
    daysColor: daysColor,
    setDaysColor: handleDaysColorChange,
    decimalsColor: decimalsColor,
    setDecimalsColor: handleDecimalsColorChange,
    daysTextColor: daysTextColor,
    setDaysTextColor: handleDaysTextColorChange,
    deadlineTextColor: deadlineTextColor,
    setDeadlineTextColor: handleDeadlineTextColorChange,
    setSettings: setSettings // Pass setSettings to ColorPickerSection
    ,
    selectedPreset: settings.selectedPreset
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LivePreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundColor: backgroundColor,
    daysColor: daysColor,
    decimalsColor: decimalsColor,
    daysTextColor: daysTextColor,
    deadlineTextColor: deadlineTextColor
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed bottom-0 left-0 p-2 text-gray-500 bg-white flex justify-center items-center rounded-tr-lg text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.linkedin.com/in/danielcarmonaserrat/",
    className: "",
    target: "_blank"
  }, "Created by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "underline"
  }, "Daniel Carmona Serrat"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Options);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5eae45e50992b5096ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=options.abf05875ee430ec6c7db.hot-update.js.map