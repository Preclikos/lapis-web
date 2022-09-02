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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
var Progress = function (_a) {
    var className = _a.className, now = _a.now, min = _a.min, max = _a.max, isLabel = _a.isLabel, color = _a.color, size = _a.size, striped = _a.striped, restProps = __rest(_a, ["className", "now", "min", "max", "isLabel", "color", "size", "striped"]);
    var colorClass = [
        color === "primary" && "bg-primary",
        color === "success" && "bg-success",
        color === "danger" && "bg-danger",
        color === "warning" && "bg-warning",
        color === "info" && "bg-info",
        color === "indigo" && "bg-indigo",
        color === "purple" && "bg-purple",
        color === "orange" && "bg-orange",
        color === "pink" && "bg-pink",
    ];
    var sizeClass = [
        size === "xxs" && "h-[2px]",
        size === "xs" && "h-[5px]",
        size === "sm" && "h-[10px]",
        size === "md" && "h-[15px]",
        size === "lg" && "h-[20px]",
    ];
    return (_jsx("div", __assign({ className: clsx("progress bg-gray-300", className) }, restProps, { children: _jsx("div", __assign({ role: "progressbar", "aria-valuenow": now, "aria-valuemin": min, "aria-valuemax": max, style: { width: "".concat(now, "%") }, className: clsx("progress-bar  flex items-center justify-center transition-[width] duration-700", color && colorClass, size && sizeClass, striped && "bg-white-striped bg-[length:1rem_1rem]") }, { children: _jsxs("span", __assign({ className: !isLabel ? "sr-only" : "text-white text-[11px]" }, { children: [now, "%"] }), void 0) }), void 0) }), void 0));
};
Progress.defaultProps = {
    now: 40,
    min: 0,
    max: 100,
    color: "primary",
    size: "md",
};
Progress.displayName = "Progress";
export default Progress;
//# sourceMappingURL=progress.js.map