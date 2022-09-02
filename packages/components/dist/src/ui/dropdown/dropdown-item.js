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
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import Anchor from "../anchor";
var DropdownItem = function (_a) {
    var children = _a.children, path = _a.path, className = _a.className, active = _a.active;
    var itemClass = "flex items-center justify-content py-[0.375rem] px-2 text-heading text-left";
    var activeClass = active && "bg-primary !text-white";
    var hoverClass = !active && "hover:bg-gray-300 focus:bg-gray-300";
    return (_jsx(Anchor, __assign({ path: path, className: clsx(className, "dropdown-item", itemClass, activeClass, hoverClass) }, { children: children }), void 0));
};
export default DropdownItem;
//# sourceMappingURL=dropdown-item.js.map