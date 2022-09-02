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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Anchor from "../../../ui/anchor";
var NavLink = function (_a) {
    var label = _a.label, path = _a.path, icon = _a.icon, hasChildren = _a.hasChildren, className = _a.className;
    var location = useLocation();
    var active = location.pathname === path;
    var baseClass = "uppercase text-sm tracking-wider font-medium h-[2.875rem] flex items-center justify-center border border-r-0 border-geyser";
    var defaultClass = !active && "bg-white text-nevada";
    var activeClass = active &&
        "bg-primary text-white bg-gradient-to-r from-primary to-primary-500 bg-repeat-x	border-primary";
    var hoverClass = !active &&
        "hover:bg-gray-200 hover:text-heading focus:bg-gray-200 focus:text-heading";
    return (_jsxs(Anchor, __assign({ path: path, className: clsx("nav-link", baseClass, defaultClass, activeClass, hoverClass, className) }, { children: [icon && (_jsx("i", { className: clsx(icon, "text-2xl lg:mr-2", !active && "text-primary", active && "text-white") }, void 0)), _jsx("span", { children: label }, void 0), hasChildren && (_jsx("i", { className: "fa fa-angle-down font-normal opacity-70 ml-1 lg:ml-2" }, void 0))] }), void 0));
};
NavLink.displayName = "NavLink";
export default NavLink;
//# sourceMappingURL=nav-link.js.map