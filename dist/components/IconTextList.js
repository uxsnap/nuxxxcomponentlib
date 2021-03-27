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
exports.IconTextList = void 0;
var index_1 = require("../index");
var react_1 = __importDefault(require("react"));
var IconTextList = function (_a) {
    var className = _a.className, items = _a.items;
    return (react_1.default.createElement("ul", { className: "icon-text-list " + (className ? className : '') }, items && items.length ? items.map(function (item) { return (react_1.default.createElement(index_1.IconText, __assign({}, item))); }) : react_1.default.createElement(index_1.NoInfo, null)));
};
exports.IconTextList = IconTextList;
exports.default = exports.IconTextList;
//# sourceMappingURL=IconTextList.js.map