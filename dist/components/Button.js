"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var className = _a.className, children = _a.children, type = _a.type, onClick = _a.onClick;
    return (react_1.default.createElement("button", { className: "ibutton " + (type ? "ibutton_" + type + " " + (className ? className : '') : ''), onClick: onClick }, children ? children : ''));
};
exports.Button = Button;
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map