"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var react_1 = __importDefault(require("react"));
var Loader = function (_a) {
    var loader = _a.loader;
    return (react_1.default.createElement("div", { className: "loader" },
        react_1.default.createElement("img", { src: loader, alt: "LOADER" })));
};
exports.Loader = Loader;
exports.default = exports.Loader;
//# sourceMappingURL=Loader.js.map