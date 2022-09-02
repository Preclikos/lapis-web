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
var CardHeader = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx("card-header relative px-3.8 py-3", className) }, { children: children }), void 0));
};
export default CardHeader;
//# sourceMappingURL=card-header.js.map