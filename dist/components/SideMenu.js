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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
exports.default = (function (_a) {
    var onIconClick = _a.onIconClick, children = _a.children, onActive = _a.onActive;
    var _b = react_1.useState(false), active = _b[0], setActive = _b[1];
    var handleOnIconClick = function () {
        setActive(!active);
        onActive(!active);
        onIconClick && onIconClick();
    };
    var computedClassName = "side-info " + (active ? 'active' : '') + " " + (children ? '' : 'dnone');
    return (react_1.default.createElement("div", { className: computedClassName },
        react_1.default.createElement("div", { className: "side-info__main" }, children),
        react_1.default.createElement("div", { className: "side-info__button" },
            react_1.default.createElement(index_1.Icon, { iconType: "arrow", onClick: handleOnIconClick }))));
});
//# sourceMappingURL=SideMenu.js.map