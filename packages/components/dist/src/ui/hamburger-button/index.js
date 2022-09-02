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
var HamburgerButton = function (_a) {
    var onClick = _a.onClick, label = _a.label, className = _a.className;
    return (_jsx("button", __assign({ type: "button", "aria-label": label, onClick: onClick, className: clsx("w-[45px] h-[45px] flex items-center justify-center text-xl text-white/75 bg-ghost absolute top-[22px] right-3.8", className) }, { children: _jsx("i", { className: "icon ion-navicon-round" }, void 0) }), void 0));
};
export default HamburgerButton;
//# sourceMappingURL=index.js.map