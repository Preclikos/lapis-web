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
var NavItem = function (_a) {
    var className = _a.className, children = _a.children, isInSubmenu = _a.isInSubmenu, onClick = _a.onClick;
    return (_jsx("li", __assign({ className: clsx("relative border-b border-b-ghost", !isInSubmenu && "mb-3.8 pb-3.8", isInSubmenu &&
            "mb-3 pb-3 last:mb-0 last:pb-0 last:border-0 first:border-t first:border-t-ghost first:mt-3 first:pt-3", className), onClick: onClick, onKeyPress: function () { }, 
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role: "menuitem", tabIndex: -1 }, { children: children }), void 0));
};
export default NavItem;
//# sourceMappingURL=nav-item.js.map