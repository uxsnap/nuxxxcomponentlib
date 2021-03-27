"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoInfo = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var NoInfo = function (_a) {
    var className = _a.className, children = _a.children, style = _a.style;
    return (react_1.default.createElement("div", { className: index_1.checkClass('no-info', className), style: style }, children ? children : "No information"));
};
exports.NoInfo = NoInfo;
exports.default = exports.NoInfo;
//# sourceMappingURL=NoInfo.js.map