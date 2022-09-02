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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
var BurgerButton = function (_a) {
    var label = _a.label, onClick = _a.onClick, className = _a.className;
    var spanClass = "absolute bg-black rounded-sm left-0 block h-0.5 w-full";
    return (_jsxs("button", __assign({ className: clsx("burger-btn h-3.5 relative -top-px w-[22px]", className), type: "button", "aria-label": label, onClick: onClick }, { children: [_jsx("span", { className: clsx(spanClass, "top-0") }, void 0), _jsx("span", { className: clsx(spanClass, "top-1/2 -translate-y-1/2") }, void 0), _jsx("span", { className: clsx(spanClass, "bottom-0") }, void 0)] }), void 0));
};
export default BurgerButton;
//# sourceMappingURL=index.js.map