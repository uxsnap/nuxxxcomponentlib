"use strict";
var __assign = (this && this.__assign) || function () {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelect = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var InputSelect = function (_a) {
    var value = _a.value, onChange = _a.onChange, rightIcon = _a.rightIcon, placeholder = _a.placeholder, items = _a.items, Component = _a.Component, Stub = _a.Stub, _b = _a.minLength, minLength = _b === void 0 ? 3 : _b, checked = _a.checked, checkedIcon = _a.checkedIcon, className = _a.className, onFocus = _a.onFocus, onBlur = _a.onBlur, onRightIconClick = _a.onRightIconClick;
    return (react_1.default.createElement("div", { className: "input-select" },
        react_1.default.createElement("div", { className: "input-select__input" },
            react_1.default.createElement(index_1.Input, { onFocus: onFocus, value: value, onChange: onChange, placeholder: placeholder, rightIcon: rightIcon, className: className ? className : '', onBlur: onBlur, onRightIconClick: onRightIconClick })),
        items && value.length > minLength &&
            react_1.default.createElement("div", { className: "input-select__dropdown" }, items.length ? items.map(function (item) { return (react_1.default.createElement(Component, __assign({}, item, { checked: checked && checked.includes(item.id) ? checkedIcon : undefined }))); }) : Stub ? react_1.default.createElement(Stub, null) : '')));
};
exports.InputSelect = InputSelect;
exports.default = exports.InputSelect;
//# sourceMappingURL=InputSelect.js.map