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
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
var NavLink = function (_a) {
    var children = _a.children, className = _a.className, active = _a.active, onClick = _a.onClick, layout = _a.layout, title = _a.title;
    var beforeClass = "before:content-[''] before:top-0 before:left-0 before:height-full before:border-l before:border-ghost";
    var layoutOneClass = "font-medium text-body before:mx-3.8";
    var layoutTwoClass = "font-bold text-trout before:mx-[10px]";
    return (_jsx("button", __assign({ type: "button", title: title, className: clsx("nav-link relative uppercase text-xs", beforeClass, layout === 1 && layoutOneClass, layout === 2 && layoutTwoClass, "first:before:hidden", className, active === title && "!text-primary"), onClick: onClick }, { children: children }), void 0));
};
NavLink.displayName = "NavLink";
NavLink.defaultProps = {
    layout: 1,
};
export default NavLink;
//# sourceMappingURL=nav-link.js.map