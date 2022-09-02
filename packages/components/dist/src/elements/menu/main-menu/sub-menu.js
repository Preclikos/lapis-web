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
import SubLink from "./sub-link";
var Submenu = function (_a) {
    var menu = _a.menu;
    return (_jsx("ul", __assign({ className: "text-left bg-white absolute border border-geyser border-t-0 z-50 hidden top-[46px] left-0 py-[0.625rem] shadow-sm shadow-secondary/20 md:w-[12.5rem] group-hover:block" }, { children: menu.map(function (nav) {
            var submenu = nav.submenu;
            return (_jsxs("li", __assign({ className: "relative group-scope" }, { children: [_jsx(SubLink, { label: nav.label, path: nav.url }, void 0), !!submenu && (_jsx("i", { className: "fa fa-angle-right absolute right-5 top-1/2 -translate-y-1/2" }, void 0)), !!submenu && (_jsx("ul", __assign({ className: "absolute bg-white top-0 -right-[200px] w-[200px] border border-ghost py-2.5 shadow-sm shadow-secondary/20 hidden group-scope-hover:block" }, { children: submenu.map(function (sub) { return (_jsx("li", { children: _jsx(SubLink, { label: sub.label, path: sub.url }, void 0) }, sub.id)); }) }), void 0))] }), nav.id));
        }) }), void 0));
};
Submenu.displayName = "Submenu";
export default Submenu;
//# sourceMappingURL=sub-menu.js.map