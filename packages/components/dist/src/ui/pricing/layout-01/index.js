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
import Button from "../../button/button";
var Pricing01 = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, price = _a.price, path = _a.path, className = _a.className;
    return (_jsxs("div", __assign({ className: clsx("pricing sm:p-[30px] text-center", className) }, { children: [_jsx("div", __assign({ className: "text-[100px] text-primary" }, { children: _jsx("i", { className: icon }, void 0) }), void 0), _jsx("h5", __assign({ className: "font-bold text-primary uppercase tracking-wider mb-[25px]" }, { children: title }), void 0), _jsx("p", __assign({ className: "mb-[30px]" }, { children: description }), void 0), _jsx("h3", __assign({ className: "font-normal mb-[25px] text-lato text-h1" }, { children: price }), void 0), _jsx(Button, __assign({ path: path, fullwidth: true, className: "uppercase text-sm font-medium" }, { children: "Choose Plan" }), void 0)] }), void 0));
};
export default Pricing01;
//# sourceMappingURL=index.js.map