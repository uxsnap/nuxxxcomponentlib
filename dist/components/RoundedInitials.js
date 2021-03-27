"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundedInitials = void 0;
var react_1 = __importDefault(require("react"));
var RoundedInitials = function (_a) {
    var className = _a.className, name = _a.name;
    return (react_1.default.createElement("div", { className: "rounded-initials " + (className ? className : '') },
        react_1.default.createElement("span", null, name ? name[0].toUpperCase() : '')));
};
exports.RoundedInitials = RoundedInitials;
exports.default = exports.RoundedInitials;
//# sourceMappingURL=RoundedInitials.js.map