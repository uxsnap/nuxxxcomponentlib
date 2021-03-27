"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarItem = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var AvatarItem = function (_a) {
    var className = _a.className, id = _a.id, img = _a.img, text = _a.text, icon = _a.icon, onIconClick = _a.onIconClick, checked = _a.checked;
    return (react_1.default.createElement(index_1.UserListItem, { img: img, text: text, className: "avatar-item " + (className ? className : '') }, icon && react_1.default.createElement("div", { className: "avatar-item__icon " + (!checked && 'active') },
        react_1.default.createElement(index_1.Icon, { iconType: !checked ? icon : '', onClick: function () {
                !checked && onIconClick(id);
            } }))));
};
exports.AvatarItem = AvatarItem;
exports.default = exports.AvatarItem;
//# sourceMappingURL=AvatarItem.js.map