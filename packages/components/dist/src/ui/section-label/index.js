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
var SectionLabel = function (_a) {
    var className = _a.className, children = _a.children, size = _a.size;
    return (_jsx("h5", __assign({ className: clsx("text-gray-600  font-bold uppercase tracking-wider mb-2", size === "sm" && "text-[11px]", size === "md" && "text-xs", className) }, { children: children }), void 0));
};
SectionLabel.defaultProps = {
    size: "sm",
};
export default SectionLabel;
//# sourceMappingURL=index.js.map