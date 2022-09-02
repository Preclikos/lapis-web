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
var MenuTitle = function (_a) {
    var children = _a.children;
    return (_jsx("h6", __assign({ className: "text-primary border-b border-b-gray-300 pb-[5px] mb-[0.938rem] text-[11px] tracking-wider text-left uppercase" }, { children: children }), void 0));
};
export default MenuTitle;
//# sourceMappingURL=menu-title.js.map