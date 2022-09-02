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
import SubLink from "./sub-link";
import MenuTitle from "./menu-title";
var MegaMenu = function (_a) {
    var menu = _a.menu;
    var doubleColumnClass = "w-5/12";
    var singleColumnClass = "max-w-full grow basis-0";
    return (_jsx("div", __assign({ className: "text-left bg-white absolute border border-geyser border-t-0 z-50 hidden top-[46px] left-0 p-[1.563rem] shadow-sm shadow-secondary/20 w-full group-hover:block" }, { children: _jsx("div", __assign({ className: "flex flex-wrap gap-[1.875rem]" }, { children: menu.map(function (nav) {
                var column = nav.submenu.length / 5;
                var singleColumn = column <= 1;
                var doubleColumn = column > 1;
                return (_jsxs("div", __assign({ className: clsx(singleColumn && singleColumnClass, doubleColumn && doubleColumnClass) }, { children: [(nav === null || nav === void 0 ? void 0 : nav.title) && _jsx(MenuTitle, { children: nav.title }, void 0), (nav === null || nav === void 0 ? void 0 : nav.submenu) && (_jsx("ul", __assign({ className: clsx(doubleColumn && "flex flex-wrap") }, { children: nav.submenu.map(function (subnav) { return (_jsx("li", __assign({ className: clsx(doubleColumn && "w-2/4") }, { children: _jsx(SubLink, { label: subnav.label, path: subnav.url, isMegaMenu: true }, void 0) }), subnav.id)); }) }), void 0))] }), nav.id));
            }) }), void 0) }), void 0));
};
export default MegaMenu;
//# sourceMappingURL=mega-menu.js.map