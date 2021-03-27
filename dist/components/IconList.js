"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconList = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var index_2 = require("../index");
var IconList = function (_a) {
    var className = _a.className, items = _a.items, stub = _a.stub;
    return (react_1.default.createElement("div", { className: "icon-list " + className },
        react_1.default.createElement("ul", { className: "icon-list__list" }, items.length
            ? items.map(function (item, ind) { return (react_1.default.createElement("li", { key: index_1.generateKey(), className: "icon-list__item" },
                react_1.default.createElement(index_2.Icon, { iconType: item.icon, onClick: item.onClick }),
                item.label ? react_1.default.createElement("span", { className: "icon-list__info" }, item.label) : '')); })
            : stub ? stub : '')));
};
exports.IconList = IconList;
exports.default = exports.IconList;
//# sourceMappingURL=IconList.js.map