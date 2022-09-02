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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
var Submenu = function (_a) {
    var menu = _a.menu;
    return (_jsx("ul", __assign({ className: "submenu mt-2.5 pl-2.5" }, { children: menu.map(function (nav) {
            var _a;
            return (_jsxs(NavItem, __assign({ isInSubmenu: true }, { children: [!(nav === null || nav === void 0 ? void 0 : nav.submenu) && (_jsx(NavLink, __assign({ path: nav.url, isInSubmenu: true }, { children: nav.label }), void 0)), (nav === null || nav === void 0 ? void 0 : nav.submenu) && (_jsxs(_Fragment, { children: [_jsx("h3", __assign({ className: "text-base opacity-70" }, { children: nav.label }), void 0), _jsx("ul", __assign({ className: "" }, { children: (_a = nav === null || nav === void 0 ? void 0 : nav.submenu) === null || _a === void 0 ? void 0 : _a.map(function (sub) { return (_jsx("li", __assign({ className: "mb-1 last:mb-0" }, { children: _jsx(NavLink, __assign({ path: sub.url, isInSubmenu: true }, { children: sub.label }), void 0) }), sub.id)); }) }), void 0)] }, void 0))] }), nav.id));
        }) }), void 0));
};
export default Submenu;
//# sourceMappingURL=sub-menu.js.map