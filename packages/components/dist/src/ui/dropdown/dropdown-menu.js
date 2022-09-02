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
var DropdownMenu = function (_a) {
    var children = _a.children, show = _a.show, direction = _a.direction, shape = _a.shape, className = _a.className, restProps = __rest(_a, ["children", "show", "direction", "shape", "className"]);
    var dropclass = "absolute z-50 min-w-fit bg-white border border-geyser rounded p-1 shadow shadow-secondary/20";
    var downclass = direction === "down" && "left-0 top-full mt-1";
    var upclass = direction === "up" && "left-0 bottom-full mb-1";
    var leftclass = direction === "left" && "right-full top-0";
    var rightclass = direction === "right" && "left-full top-0";
    var topAfterClass = shape &&
        "mt-[7px] after:absolute after:content-[''] after:border-8 after:border-transparent after:border-b-white after:right-[1.625rem] after:-top-[0.938rem] after:z-10";
    var topBeforeClass = shape &&
        "before:absolute before:content-[''] before:border-8 before:border-transparent before:border-b-gray-600 before:-top-4 before:right-[1.625rem] before:z-10";
    return (_jsx("div", __assign({ className: clsx(className, "dropdown-menu", show ? "block" : "hidden", dropclass, downclass, upclass, leftclass, rightclass, direction === "down" && [topAfterClass, topBeforeClass]) }, restProps, { children: children }), void 0));
};
DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map