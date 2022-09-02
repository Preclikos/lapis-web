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
var OffcanvasHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (_jsx("div", __assign({ className: clsx("offcanvas-header py-3.8 px-[1.875rem] flex items-center justify-between", className) }, { children: children }), void 0));
};
export default OffcanvasHeader;
//# sourceMappingURL=header.js.map