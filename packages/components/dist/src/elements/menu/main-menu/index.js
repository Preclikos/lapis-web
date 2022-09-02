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
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import SubMenu from "./sub-menu";
import MegaMenu from "./mega-menu";
var MainMenu = function (_a) {
    var menu = _a.menu, className = _a.className;
    return (_jsx("div", __assign({ className: clsx("slim-navbar py-[0.938rem] bg-white border-b border-b-ghost hidden lg:block", className) }, { children: _jsx("div", __assign({ className: "container" }, { children: _jsx("ul", __assign({ className: "nav flex flex-wrap relative" }, { children: menu.map(function (nav, i) {
                    var submenu = nav.submenu, megamenu = nav.megamenu;
                    var hasChildren = !!submenu || !!megamenu;
                    return (_jsxs(NavItem, __assign({ hasChildren: hasChildren, isMegaMenu: !!megamenu }, { children: [_jsx(NavLink, { icon: nav.icon, label: nav.label, path: nav.url, className: i === menu.length - 1 ? "!border-r" : "" }, void 0), submenu && _jsx(SubMenu, { menu: submenu }, void 0), megamenu && _jsx(MegaMenu, { menu: megamenu }, void 0)] }), nav.id));
                }) }), void 0) }), void 0) }), void 0));
};
export default MainMenu;
//# sourceMappingURL=index.js.map