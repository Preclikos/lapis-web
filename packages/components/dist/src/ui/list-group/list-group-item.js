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
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
var ListGroupItem = function (_a) {
    var className = _a.className, children = _a.children, active = _a.active, disabled = _a.disabled, flush = _a.flush, horizontal = _a.horizontal, restProps = __rest(_a, ["className", "children", "active", "disabled", "flush", "horizontal"]);
    return (_jsx("li", __assign({ className: clsx(className, "list-group-item", "py-2.5 px-3.8", !horizontal && "border border-t-0 border-geyser first:border-t", !flush && !horizontal && "first:rounded-t last:rounded-b", !active && !disabled && "bg-transparent", active &&
            "-mt-px border-t z-10 text-white bg-primary border-primary", disabled && "text-gray-850 pointer-events-none bg-white", flush && "border-0 border-b last:border-b-0", horizontal &&
            "first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br border border-geyser border-l-0 first:border-l") }, restProps, { children: children }), void 0));
};
ListGroupItem.displayName = "ListGroupItem";
export default ListGroupItem;
//# sourceMappingURL=list-group-item.js.map