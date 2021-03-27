"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconText = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var IconText = function (_a) {
    var className = _a.className, iconType = _a.iconType, text = _a.text, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: "icon-text " + className },
        react_1.default.createElement(index_1.Row, null,
            react_1.default.createElement("div", null, text),
            react_1.default.createElement(index_1.Icon, { iconType: iconType, onClick: onClick }))));
};
exports.IconText = IconText;
exports.default = exports.IconText;
//# sourceMappingURL=IconText.js.map