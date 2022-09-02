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
import clsx from "clsx";
import { Link } from "react-router-dom";
var BreadcrumbItem = function (_a) {
    var children = _a.children, path = _a.path, active = _a.active, className = _a.className;
    var beforeClass = "before:inline-block before:pr-2 before:text-ghost before:content-['/']";
    return (_jsxs("li", __assign({ className: clsx(className, "breadcrumb-item pl-2 first:pl-0 first:before:hidden", beforeClass), "aria-current": active && "page" }, { children: [!active && path && (_jsx(Link, __assign({ className: "text-primary capitalize", to: path }, { children: children }), void 0)), active && (_jsx("span", __assign({ className: clsx(active && "text-pale capitalize") }, { children: children }), void 0))] }), void 0));
};
export default BreadcrumbItem;
//# sourceMappingURL=breadcrumb-item.js.map