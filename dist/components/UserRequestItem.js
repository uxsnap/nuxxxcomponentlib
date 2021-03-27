"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestItem = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var UserRequestItem = function (_a) {
    var className = _a.className, img = _a.img, text = _a.text, icons = _a.icons;
    return (react_1.default.createElement(index_1.UserListItem, { img: img, text: text, className: "user-request-item " + (className ? className : '') }, icons &&
        react_1.default.createElement("div", { className: "user-request-item__icons" },
            react_1.default.createElement(index_1.IconList, { items: icons }))));
};
exports.UserRequestItem = UserRequestItem;
exports.default = exports.UserRequestItem;
//# sourceMappingURL=UserRequestItem.js.map