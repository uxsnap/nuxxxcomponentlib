"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
exports.default = (function (_a) {
    var className = _a.className, src = _a.src, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: className ? className : '' }, src
        ? react_1.default.createElement("img", { src: src, alt: "ME", onClick: onClick })
        : react_1.default.createElement(index_1.Icon, { iconType: "person", onClick: onClick })));
});
//# sourceMappingURL=Avatar.js.map