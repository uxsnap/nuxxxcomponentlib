"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWrapper = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var ErrorWrapper = function (_a) {
    var className = _a.className, error = _a.error, children = _a.children, onClose = _a.onClose, _b = _a.timeToElapse, timeToElapse = _b === void 0 ? 10000 : _b;
    var errors = error.errors;
    setTimeout(function () { return onClose(); }, timeToElapse);
    return (react_1.default.createElement("div", { className: "error-wrapper " + (className ? className : '') },
        error &&
            react_1.default.createElement("div", { className: "error-box" },
                react_1.default.createElement("div", { className: "error-box__title" }, "Error"),
                react_1.default.createElement("div", null, errors && (react_1.default.createElement("ul", { className: "error-box__list" }, errors.map(function (error) { return (react_1.default.createElement("li", null, error)); })))),
                react_1.default.createElement(index_1.Icon, { iconType: "close", onClick: onClose })),
        children));
};
exports.ErrorWrapper = ErrorWrapper;
exports.default = exports.ErrorWrapper;
//# sourceMappingURL=ErrorWrapper.js.map