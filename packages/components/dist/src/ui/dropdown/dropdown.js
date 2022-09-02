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
import { Children, useState, useCallback, } from "react";
import clsx from "clsx";
import { useClickOutside } from "@ht/shared/hooks";
var Dropdown = function (_a) {
    var children = _a.children, direction = _a.direction, shape = _a.shape, showIcon = _a.showIcon, className = _a.className, restProps = __rest(_a, ["children", "direction", "shape", "showIcon", "className"]);
    var _b = __read(useState(false), 2), show = _b[0], setShow = _b[1];
    var handleClick = function () {
        setShow(function (prev) { return !prev; });
    };
    var onClose = useCallback(function () {
        setShow(false);
    }, []);
    var containerRef = useClickOutside(onClose);
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "DropdownToggle") {
                return (_jsx(child.type, __assign({}, child.props, { direction: direction, showIcon: showIcon, show: show, onClick: handleClick }), void 0));
            }
            if (name_1 === "DropdownMenu") {
                return (_jsx(child.type, __assign({}, child.props, { direction: direction, show: show, shape: shape }), void 0));
            }
        }
        return null;
    });
    return (_jsx("div", __assign({}, restProps, { ref: containerRef, className: clsx(className, "dropdown relative") }, { children: RenderChild }), void 0));
};
Dropdown.defaultProps = {
    direction: "down",
    showIcon: true,
};
export default Dropdown;
//# sourceMappingURL=dropdown.js.map