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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";
var ScrollBar = function (_a) {
    var children = _a.children, bottom = _a.bottom, className = _a.className, initialView = _a.initialView, isPositionChange = _a.isPositionChange, rest = __rest(_a, ["children", "bottom", "className", "initialView", "isPositionChange"]);
    var _b = __read(useState(), 2), scrollEl = _b[0], setScrollEl = _b[1];
    useEffect(function () {
        if (initialView !== "bottom")
            return;
        if (scrollEl) {
            // Set the scroll position to the bottom
            scrollEl.scrollTop = scrollEl.scrollHeight;
        }
    }, [scrollEl, initialView, isPositionChange]);
    return (_jsx("div", __assign({}, rest, { className: clsx("scrollbar", className), style: { height: bottom ? "calc(100% - ".concat(bottom, ")") : "100%" } }, { children: _jsx(PerfectScrollbar, __assign({ containerRef: function (ref) { return setScrollEl(ref); } }, { children: children }), void 0) }), void 0));
};
ScrollBar.defaultProps = {
    initialView: "top",
};
export default ScrollBar;
//# sourceMappingURL=index.js.map