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
var Pricing03 = function (_a) {
    var title = _a.title, price = _a.price, period = _a.period, features = _a.features, path = _a.path, isFeatured = _a.isFeatured, className = _a.className;
    return (_jsxs("div", __assign({ className: clsx("pricing text-center", className) }, { children: [_jsx("div", __assign({ className: clsx("text-white uppercase font-bold text-sm tracking-whider px-3.8 py-3", isFeatured && "bg-primary", !isFeatured && "bg-heading") }, { children: title }), void 0), _jsxs("div", __assign({ className: clsx("py-[50px] px-[30px] bg-gray-200 border-x", isFeatured && "border-x-primary", !isFeatured && "border-x-ghost") }, { children: [_jsx("h2", __assign({ className: "font-lato text-shark mb-0 text-h1" }, { children: price }), void 0), _jsxs("p", __assign({ className: "text-xs mb-0" }, { children: ["per ", period] }), void 0)] }), void 0), _jsxs("div", __assign({ className: clsx("p-[30px] bg-white border border-t-0", isFeatured && "border-primary", !isFeatured && "border-ghost") }, { children: [_jsx("ul", __assign({ className: "mx-5 mb-[25px]" }, { children: features.map(function (feat) { return (_jsx("li", __assign({ className: "py-2.5 border-t border-t-geyser first:border-0" }, { children: feat }), feat)); }) }), void 0), _jsx(Button, __assign({ path: path, fullwidth: true, className: clsx("uppercase text-sm font-medium tracking-wider border-0", !isFeatured && "bg-heading") }, { children: "Start Free Trial" }), void 0)] }), void 0)] }), void 0));
};
export default Pricing03;
//# sourceMappingURL=index.js.map