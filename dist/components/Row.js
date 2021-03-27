"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (_a) {
    var children = _a.children, curClass = _a.curClass;
    return (react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', width: '100%' }, className: curClass ? curClass : '' }, children));
});
//# sourceMappingURL=Row.js.map