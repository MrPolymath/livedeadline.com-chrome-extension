"use strict";
self["webpackHotUpdatelumo_chrome_extension"]("options",{

/***/ "./src/pages/Options/ColorPickerSection.tsx":
/*!**************************************************!*\
  !*** ./src/pages/Options/ColorPickerSection.tsx ***!
  \**************************************************/
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var Options = function () {
    var _a = (0,_common_useSettingsStore__WEBPACK_IMPORTED_MODULE_1__.useSettingsStore)(), settings = _a[0], setSettings = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        startDate: null,
        endDate: null, // in format YYYY-MM-DD
    }), dateValue = _b[0], setDateValue = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("00:00"), time = _c[0], setTime = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), description = _d[0], setDescription = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.backgroundColor || "#f1f5f9"), backgroundColor = _e[0], setBackgroundColor = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.daysColor || "#000000"), daysColor = _f[0], setDaysColor = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.decimalsColor || "#000000"), decimalsColor = _g[0], setDecimalsColor = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.daysTextColor || "#000000"), daysTextColor = _h[0], setDaysTextColor = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.deadlineTextColor || "#000000"), deadlineTextColor = _j[0], setDeadlineTextColor = _j[1];
    var handleDateChange = function (newValue) {
        if (newValue) {
            var startDate = newValue.startDate, endDate = newValue.endDate;
            setDateValue({ startDate: startDate, endDate: endDate });
        }
    };
    var handleTimeChange = function (event) {
        setTime(event.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (dateValue.endDate) {
            var _a = dateValue.endDate.split("-"), year = _a[0], month = _a[1], day = _a[2];
            var _b = time.split(":"), hours = _b[0], minutes = _b[1];
            var date_1 = new Date(year, month - 1, day, hours, minutes);
            setSettings(function (prevState) { return (__assign(__assign({}, prevState), { countdownEndTime: date_1.getTime() })); });
        }
    }, [dateValue.endDate, time, setSettings]);
    var handleDescriptionChange = function (event) {
        setDescription(event.target.value);
        setSettings(function (prevState) { return (__assign(__assign({}, prevState), { countdownText: event.target.value })); });
    };
    // Generic handler for color changes
    var createColorChangeHandler = function (colorKey, setColor) { return function (newColor) {
        setColor(newColor);
        setSettings(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[colorKey] = newColor, _a)));
        });
    }; };
    var handleBackgroundColorChange = createColorChangeHandler("backgroundColor", setBackgroundColor);
    var handleDaysColorChange = createColorChangeHandler("daysColor", setDaysColor);
    var handleDecimalsColorChange = createColorChangeHandler("decimalsColor", setDecimalsColor);
    var handleDaysTextColorChange = createColorChangeHandler("daysTextColor", setDaysTextColor);
    var handleDeadlineTextColorChange = createColorChangeHandler("deadlineTextColor", setDeadlineTextColor);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: "min-h-screen flex flex-col md:flex-row relative" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "md:min-h-screen flex flex-col md:items-center md:justify-center md:p-24 p-12 text-slate-800 bg-slate-100 md:w-1/2 xl:w-2/3" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-xl mt-4" }, "1. Select a date:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "w-full md:w-96 mt-2" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], { asSingle: true, useRange: false, value: dateValue, onChange: handleDateChange })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-xl mt-4" }, "2. Select a specific time:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-sm" }, "(optional, defaults to midnight if not set):"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "time", value: time, onChange: handleTimeChange, className: "border border-gray-300 rounded-md p-2 mt-2 w-full md:w-96" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-xl mt-4" }, "3. Add a description:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", value: description, onChange: handleDescriptionChange, placeholder: "e.g. My super important event", className: "border border-gray-300 rounded-md p-2 mt-2 md:w-96" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "md:fixed md:h-full md:right-0 md:top-0 md:w-1/2 xl:w-1/3 bg-white md:shadow-lg flex flex-col" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ColorPickerSection__WEBPACK_IMPORTED_MODULE_4__["default"], { backgroundColor: backgroundColor, setBackgroundColor: handleBackgroundColorChange, daysColor: daysColor, setDaysColor: handleDaysColorChange, decimalsColor: decimalsColor, setDecimalsColor: handleDecimalsColorChange, daysTextColor: daysTextColor, setDaysTextColor: handleDaysTextColorChange, deadlineTextColor: deadlineTextColor, setDeadlineTextColor: handleDeadlineTextColorChange }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LivePreview__WEBPACK_IMPORTED_MODULE_3__["default"], { backgroundColor: backgroundColor, daysColor: daysColor, decimalsColor: decimalsColor, daysTextColor: daysTextColor, deadlineTextColor: deadlineTextColor })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fixed bottom-0 left-0 p-2 text-gray-500 bg-white flex justify-center items-center rounded-tr-lg text-sm" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://www.linkedin.com/in/danielcarmonaserrat/", className: "", target: "_blank" },
                "Created by ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "underline" }, "Daniel Carmona Serrat")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Options);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d9f7473f7d96ae20457")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=options.f523c609b5c46e547a1c.hot-update.js.map