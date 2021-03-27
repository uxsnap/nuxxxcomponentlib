"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyRender = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var index_2 = require("../index");
var LazyRender = function (_a) {
    var status = _a.status, children = _a.children, _b = _a.error, error = _b === void 0 ? 'Error' : _b;
    return status === index_1.RES_STATUS.LOADING
        ? react_1.default.createElement(index_2.Loader, null)
        : status === index_1.RES_STATUS.ERROR
            ? error
            : children;
};
exports.LazyRender = LazyRender;
exports.default = exports.LazyRender;
//# sourceMappingURL=LazyRender.js.map