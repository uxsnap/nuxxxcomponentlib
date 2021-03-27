"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var index_2 = require("../index");
var Input = function (_a) {
    var id = _a.id, label = _a.label, type = _a.type, value = _a.value, onChange = _a.onChange, className = _a.className, placeholder = _a.placeholder, rightIcon = _a.rightIcon, onRightIconClick = _a.onRightIconClick;
    return (react_1.default.createElement("div", { className: index_1.checkClass("iinput", className) },
        react_1.default.createElement("label", { className: "iinput__label", htmlFor: id }, label),
        react_1.default.createElement("input", { className: "iinput__input", type: type, onChange: function (e) { return onChange(e.target.value); }, value: value, placeholder: placeholder, autoComplete: 'off' }),
        rightIcon &&
            react_1.default.createElement(index_2.Icon, { iconType: rightIcon, onClick: onRightIconClick })));
};
exports.Input = Input;
exports.default = exports.Input;
//# sourceMappingURL=Input.js.map