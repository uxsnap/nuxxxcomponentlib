"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var Icon = function (_a) {
    var iconType = _a.iconType, onClick = _a.onClick;
    return (react_1.default.createElement("span", { onClick: onClick ? onClick : undefined, className: "iicon iicon-" + iconType }));
};
exports.Icon = Icon;
exports.default = exports.Icon;
//# sourceMappingURL=Icon.js.map