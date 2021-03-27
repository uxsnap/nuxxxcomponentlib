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
exports.Col = void 0;
var react_1 = __importDefault(require("react"));
var Col = function (_a) {
    var className = _a.className, children = _a.children, style = _a.style;
    return (react_1.default.createElement("div", { style: __assign({ width: '100%' }, style), className: className + " icol" }, children));
};
exports.Col = Col;
exports.default = exports.Col;
//# sourceMappingURL=Col.js.map