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
import { mergeTailwindClassesAlt } from "@ht/shared/methods";
var CardFooter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, children = _a.children;
    return (_jsx("div", __assign({ className: mergeTailwindClassesAlt("card-footer relative px-5 py-3 bg-black/5 border-t border-t-ghost", className) }, { children: children }), void 0));
};
export default CardFooter;
//# sourceMappingURL=card-footer.js.map