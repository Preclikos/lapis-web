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
// import { mergeTailwindClassesAlt } from "@ht/shared/methods";
import clsx from "clsx";
var Card = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsx("div", __assign({ className: clsx("card relative min-h-min break-words bg-white border border-ghost", className) }, { children: children }), void 0));
};
export default Card;
//# sourceMappingURL=card.js.map