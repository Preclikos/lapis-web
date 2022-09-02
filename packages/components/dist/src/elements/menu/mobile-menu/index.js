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
import Offcanvas, { OffcanvasHeader, OffcanvasBody, } from "../../../ui/offcanvas";
import Logo from "../../logo";
import CloseButton from "../../../ui/close-button";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import ExpandButton from "./expand-button";
import Submenu from "./sub-menu";
import Megamenu from "./mega-menu";
import { getSiblings } from "@ht/shared/methods";
var MobileMenu = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick, menu = _a.menu;
    var clickHandler = function (e, hasChildren) {
        if (hasChildren) {
            var target = e.currentTarget;
            if (target.nodeName === "A") {
                var tr = target;
                if (tr.hash)
                    return;
                e.preventDefault();
                target = target.parentElement;
            }
            var submenu = target.querySelector(".submenu");
            var siblings = getSiblings(target);
            submenu === null || submenu === void 0 ? void 0 : submenu.classList.toggle("open");
            siblings.forEach(function (sib) {
                sib.childNodes.forEach(function (child) {
                    var _a;
                    var childHT = child;
                    (_a = childHT === null || childHT === void 0 ? void 0 : childHT.classList) === null || _a === void 0 ? void 0 : _a.remove("open");
                });
            });
        }
    };
    return (_jsxs(Offcanvas, __assign({ isOpen: isOpen, onClose: onClick, className: "lg:hidden" }, { children: [_jsxs(OffcanvasHeader, { children: [_jsx(Logo, {}, void 0), _jsx(CloseButton, { onClick: onClick }, void 0)] }, void 0), _jsx(OffcanvasBody, { children: _jsx("ul", __assign({ className: "mobile-menu navbar" }, { children: menu.map(function (nav) {
                        var submenu = nav.submenu, megamenu = nav.megamenu;
                        var hasChildren = !!submenu || !!megamenu;
                        return (_jsxs(NavItem, __assign({ onClick: function (e) { return clickHandler(e, true); } }, { children: [_jsx(NavLink, __assign({ path: nav.url }, { children: nav.label }), void 0), hasChildren && (_jsx(ExpandButton, { onClick: function (e) { return clickHandler(e, true); } }, void 0)), submenu && _jsx(Submenu, { menu: submenu }, void 0), megamenu && _jsx(Megamenu, { menu: megamenu }, void 0)] }), nav.id));
                    }) }), void 0) }, void 0)] }), void 0));
};
export default MobileMenu;
//# sourceMappingURL=index.js.map