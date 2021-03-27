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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilesProfile = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var UserFilesProfile = function (_a) {
    var className = _a.className, user = _a.user, onMouseEnter = _a.onMouseEnter, active = _a.active;
    var currentUserSelector = "user-files__user_" + user.id;
    var innerOnMouseEnter = function (e) {
        onMouseEnter(user.id, currentUserSelector);
        e.stopPropagation();
    };
    return (react_1.default.createElement("div", { onMouseEnter: innerOnMouseEnter, className: "user-files " + (className ? className : '') + " " + (active ? 'active' : '') },
        react_1.default.createElement("div", { className: "user-files__user " + currentUserSelector },
            react_1.default.createElement(index_1.AvatarItem, __assign({}, user)))));
};
exports.UserFilesProfile = UserFilesProfile;
exports.default = exports.UserFilesProfile;
//# sourceMappingURL=UserFilesProfile.js.map