"use strict";
self["webpackHotUpdatelumo_chrome_extension"]("options",{

/***/ "./src/pages/Options/ColorPickerSection.tsx":
/*!**************************************************!*\
  !*** ./src/pages/Options/ColorPickerSection.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPickerSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var COLOR_PRESETS = [
    {
        backgroundColor: "#F6F6EF",
        daysColor: "#f0652f",
        decimalsColor: "#fda942",
        daysTextColor: "#000000",
        deadlineTextColor: "#108AD2",
    },
    {
        backgroundColor: "#F1F5F9",
        daysColor: "#1E293B",
        decimalsColor: "#1E293B",
        daysTextColor: "#475569",
        deadlineTextColor: "#1E293B",
    },
    {
        backgroundColor: "#1a1a23",
        daysColor: "#00bfff",
        decimalsColor: "#b6dafb",
        daysTextColor: "#d9d9d9",
        deadlineTextColor: "#e8b65e",
    },
    {
        backgroundColor: "#fcf5e9",
        daysColor: "#A02334",
        decimalsColor: "#98641C",
        daysTextColor: "#D69251",
        deadlineTextColor: "#3EB87E",
    },
    {
        backgroundColor: "#f1faee",
        daysColor: "#1d3557",
        decimalsColor: "#457b9d",
        daysTextColor: "#a8dadc",
        deadlineTextColor: "#e63946",
    },
];
function ColorPickerSection(_a) {
    var backgroundColor = _a.backgroundColor, setBackgroundColor = _a.setBackgroundColor, daysColor = _a.daysColor, setDaysColor = _a.setDaysColor, decimalsColor = _a.decimalsColor, setDecimalsColor = _a.setDecimalsColor, daysTextColor = _a.daysTextColor, setDaysTextColor = _a.setDaysTextColor, deadlineTextColor = _a.deadlineTextColor, setDeadlineTextColor = _a.setDeadlineTextColor;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), selectedPresetIndex = _b[0], setSelectedPresetIndex = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        applyPreset(COLOR_PRESETS[0]);
    }, []);
    var applyPreset = function (preset, index) {
        setBackgroundColor(preset.backgroundColor);
        setDaysColor(preset.daysColor);
        setDecimalsColor(preset.decimalsColor);
        setDaysTextColor(preset.daysTextColor);
        setDeadlineTextColor(preset.deadlineTextColor);
        // Update the settings store as well
        setSettings(function (prevState) { return (__assign(__assign({}, prevState), { backgroundColor: preset.backgroundColor, daysColor: preset.daysColor, decimalsColor: preset.decimalsColor, daysTextColor: preset.daysTextColor, deadlineTextColor: preset.deadlineTextColor })); });
        if (index !== undefined) {
            setSelectedPresetIndex(index);
        }
        console.log("updated colors to: ", preset);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "p-4 flex-grow" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "text-xl font-bold mb-4" }, "Customize styles"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "block text-sm font-medium w-1/2 pr-2" }, "Background Color"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "h-10 w-1/2 block bg-white cursor-pointer", value: backgroundColor, onChange: function (e) { return setBackgroundColor(e.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-wrap mt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "block text-sm font-medium w-1/2 pr-2" }, "Days Color"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "h-10 w-1/2 block bg-white cursor-pointer", value: daysColor, onChange: function (e) { return setDaysColor(e.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-wrap mt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "block text-sm font-medium w-1/2 pr-2" }, "Decimals Color"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "h-10 w-1/2 block bg-white cursor-pointer", value: decimalsColor, onChange: function (e) { return setDecimalsColor(e.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-wrap mt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "block text-sm font-medium w-1/2 pr-2" }, "Days Text Color"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "h-10 w-1/2 block bg-white cursor-pointer", value: daysTextColor, onChange: function (e) { return setDaysTextColor(e.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-wrap mt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "block text-sm font-medium w-1/2 pr-2" }, "Deadline Text Color"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "h-10 w-1/2 block bg-white cursor-pointer", value: deadlineTextColor, onChange: function (e) { return setDeadlineTextColor(e.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "mt-8" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "text-xl font-bold mb-4" }, "Color Presets"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex justify-between" }, COLOR_PRESETS.map(function (preset, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: index, className: "w-16 h-16 cursor-pointer border hover:scale-110 ".concat(selectedPresetIndex === index
                    ? "border-blue-500 border-4 shadow-md scale-110"
                    : "border-gray-950"), onClick: function () { return applyPreset(preset, index); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h-full w-full", style: { display: "flex", flexDirection: "column" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                            height: "50%",
                            backgroundColor: preset.backgroundColor,
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                            display: "flex",
                            height: "50%",
                            flexDirection: "row",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                width: "50%",
                                height: "100%",
                                backgroundColor: preset.daysColor,
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                width: "50%",
                                height: "100%",
                                flexDirection: "column",
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                    height: "50%",
                                    backgroundColor: preset.decimalsColor,
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                    height: "50%",
                                    backgroundColor: preset.daysTextColor,
                                } })))))); })))));
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b57e67fe9c98b3c81fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=options.ca80b12d13798e52bf82.hot-update.js.map