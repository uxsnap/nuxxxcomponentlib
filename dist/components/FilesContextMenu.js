"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.FilesContextMenu = void 0;
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
var FilesContextMenu = function (_a) {
    var className = _a.className, onLoad = _a.onLoad, active = _a.active, files = _a.files, userId = _a.userId, onMouseLeave = _a.onMouseLeave, status = _a.status;
    var menu = react_1.useRef(null);
    var innerOnMouseLeave = function (e) {
        onMouseLeave(e);
        e.stopPropagation();
    };
    var preparedFiles = files.map(function (file) { return (__assign(__assign({}, file), { onClick: function () { return onLoad(file.id, file.text); } })); });
    var getElem = function (userId) { return document.querySelector('.' + userId); };
    var contextMenuClassName = function () { return "files-context-menu " + (className ? className : '') + " " + (active ? 'active' : ''); };
    return userId && (react_1.default.createElement("div", { ref: menu, className: contextMenuClassName(), style: { top: getElem(userId).offsetTop + 'px' }, onMouseLeave: innerOnMouseLeave },
        react_1.default.createElement(index_1.LazyRender, { status: status },
            react_1.default.createElement(index_1.IconTextList, { items: preparedFiles }))));
};
exports.FilesContextMenu = FilesContextMenu;
exports.default = exports.FilesContextMenu;
//# sourceMappingURL=FilesContextMenu.js.map