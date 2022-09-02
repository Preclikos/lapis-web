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
import Anchor from "../../../ui/anchor";
var NavLink = function (_a) {
    var path = _a.path, className = _a.className, isInSubmenu = _a.isInSubmenu, children = _a.children;
    return (_jsx(Anchor, __assign({ path: path, className: clsx("block text-heading hover:text-primary z-50", className, !isInSubmenu && "text-lg  font-medium", isInSubmenu && "text-base") }, { children: children }), void 0));
};
export default NavLink;
//# sourceMappingURL=nav-link.js.map