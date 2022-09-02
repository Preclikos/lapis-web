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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import Button from "../button/button";
var DropdownToggle = function (_a) {
    var children = _a.children, className = _a.className, direction = _a.direction, showIcon = _a.showIcon, show = _a.show, customStyle = _a.customStyle, color = _a.color, iconClass = _a.iconClass, restProps = __rest(_a, ["children", "className", "direction", "showIcon", "show", "customStyle", "color", "iconClass"]);
    var primaryOnlyIconHoverClass = customStyle === "only-icon" &&
        !show &&
        "hover:bg-gray-150 hover:text-primary focus:bg-gray-150 focus:text-primary";
    var primaryOnlyIconActiveClass = customStyle === "only-icon" && show && "bg-primary !text-white";
    return (_jsxs(Button, __assign({ className: clsx("dropdown-toggle", className, color === "primary" && [
            primaryOnlyIconHoverClass,
            primaryOnlyIconActiveClass,
        ]), color: color, "aria-expanded": show }, restProps, { children: [showIcon && direction === "left" && (_jsx("i", { className: clsx("fa fa-angle-left mt-0.5 mr-1.5", iconClass) }, void 0)), children, showIcon && direction && direction !== "left" && (_jsx("i", { className: clsx("fa fa-angle-".concat(direction, " mt-0.5 ml-1.5"), iconClass) }, void 0))] }), void 0));
};
DropdownToggle.defaultProps = {
    label: "DropdownToggle",
    color: "primary",
};
DropdownToggle.displayName = "DropdownToggle";
export default DropdownToggle;
//# sourceMappingURL=dropdown-toggle.js.map