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
var defaultElement = "div";
var Media = function (_a) {
    var className = _a.className, children = _a.children, as = _a.as;
    var Tag = as || defaultElement;
    return (_jsx(Tag, __assign({ className: clsx(Tag === "div" ? "media" : "media-list", "flex items-start", className) }, { children: children }), void 0));
};
export default Media;
//# sourceMappingURL=media.js.map