"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListItem = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var UserListItem = function (_a) {
    var className = _a.className, img = _a.img, text = _a.text, children = _a.children;
    return (react_1.default.createElement("div", { className: "user-list-item " + (className ? className : '') },
        react_1.default.createElement("div", { className: "user-list-item__img" }, img ? react_1.default.createElement(index_1.Avatar, { src: img }) : react_1.default.createElement(index_1.RoundedInitials, { name: text })),
        react_1.default.createElement("div", { className: "user-list-item__text" }, text),
        children));
};
exports.UserListItem = UserListItem;
exports.default = exports.UserListItem;
//# sourceMappingURL=UserListItem.js.map