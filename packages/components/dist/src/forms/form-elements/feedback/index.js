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
var Feedback = function (_a) {
    var state = _a.state, showErrorOnly = _a.showErrorOnly, children = _a.children;
    return (_jsx("span", __assign({ className: clsx("w-full block mt-1 text-xs", state !== "error" && showErrorOnly && "hidden", state === "success" && !showErrorOnly && "text-success", state === "warning" && !showErrorOnly && "text-warning", state === "error" && "text-danger") }, { children: children }), void 0));
};
export default Feedback;
//# sourceMappingURL=index.js.map