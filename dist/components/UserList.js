"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
var react_1 = __importStar(require("react"));
var react_outside_click_handler_1 = __importDefault(require("react-outside-click-handler"));
var index_1 = require("../index");
var UserList = function (_a) {
    var icon = _a.icon, items = _a.items, Component = _a.Component;
    var _b = react_1.useState(false), isActive = _b[0], setActive = _b[1];
    var toggleSetActive = function () { return setActive(!isActive); };
    return (react_1.default.createElement(react_outside_click_handler_1.default, { onOutsideClick: function () { return setActive(false); } },
        react_1.default.createElement("div", { onClick: toggleSetActive, className: "user-list" },
            react_1.default.createElement("div", { className: "user-list__icon" },
                react_1.default.createElement(index_1.Icon, { iconType: icon ? icon : '' })),
            react_1.default.createElement("div", { className: "user-list__counter" }, items ? items.length > 9 ? '9+' : items.length : 0),
            isActive && react_1.default.createElement("div", { className: "user-list__list" },
                react_1.default.createElement(index_1.UserItemList, { items: items, Component: Component })))));
};
exports.UserList = UserList;
exports.default = exports.UserList;
//# sourceMappingURL=UserList.js.map