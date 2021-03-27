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
exports.File = void 0;
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
var File = function (_a) {
    var onDelete = _a.onDelete, filename = _a.filename, onEdit = _a.onEdit;
    var _b = react_1.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = react_1.useState(filename), fileName = _c[0], setFileName = _c[1];
    var handleOnEdit = function () {
        setIsEditing(false);
        onEdit(fileName);
    };
    var handleFileName = function (val) { return setFileName(val); };
    return (react_1.default.createElement("div", { className: "file" },
        react_1.default.createElement("div", { className: "file__file" },
            react_1.default.createElement(index_1.Icon, { iconType: "files" })),
        isEditing ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "file__input" },
                    react_1.default.createElement(index_1.Input, { value: fileName, onChange: handleFileName, placeholder: "Input new file name..." })),
                react_1.default.createElement("div", { className: "file__icons" },
                    react_1.default.createElement(index_1.Icon, { iconType: "check", onClick: handleOnEdit }),
                    react_1.default.createElement(index_1.Icon, { iconType: "close", onClick: function () { return setIsEditing(false); } })))
            :
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "file__name" }, filename),
                    react_1.default.createElement("div", { className: "file__icons" },
                        react_1.default.createElement("div", { className: "file__delete" },
                            react_1.default.createElement(index_1.Icon, { iconType: "close", onClick: onDelete })),
                        react_1.default.createElement("div", { className: "file__edit" },
                            react_1.default.createElement(index_1.Icon, { iconType: "pen", onClick: function () { return setIsEditing(true); } }))))));
};
exports.File = File;
exports.default = exports.File;
//# sourceMappingURL=File.js.map