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
import Anchor from "../../ui/anchor";
var Logo = function (_a) {
    var className = _a.className;
    return (_jsx("h1", __assign({ className: clsx("logo mb-0 tracking-tightest font-bold text-[2rem] lg:text-[2.25rem] lg:mr-[3.75rem]", className) }, { children: _jsxs(Anchor, __assign({ path: "/", className: "text-primary" }, { children: ["stor", _jsx("span", { children: "." }, void 0)] }), void 0) }), void 0));
};
export default Logo;
//# sourceMappingURL=index.js.map