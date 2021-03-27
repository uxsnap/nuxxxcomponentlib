"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
exports.default = (function (_a) {
    var className = _a.className, items = _a.items, stub = _a.stub, onDelete = _a.onDelete, onEdit = _a.onEdit;
    return (react_1.default.createElement("div", { className: "file-list " + (className ? className : '') }, items && items.length
        ? items.map(function (item) { return (react_1.default.createElement(index_1.File, { filename: item.name, onDelete: function () { return onDelete(item.id); }, onEdit: function (fileName) { return onEdit(item.id, fileName); } })); }) : stub ? stub : ''));
});
//# sourceMappingURL=FileList.js.map