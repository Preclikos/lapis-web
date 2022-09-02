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
var Pricing02 = function (_a) {
    var title = _a.title, price = _a.price, period = _a.period, features = _a.features, path = _a.path, className = _a.className;
    return (_jsxs("div", __assign({ className: clsx("pricing text-center p-[30px] bg-white border border-ghost", className) }, { children: [_jsx("h6", __assign({ className: "font-bold uppercase tracking-wider text-base mb-[25px]" }, { children: title }), void 0), _jsx("h2", __assign({ className: "text-[56px] font-lato font-normal text-primary mb-0" }, { children: price }), void 0), _jsxs("p", __assign({ className: "mb-[25px]" }, { children: ["per ", period] }), void 0), _jsx("ul", __assign({ className: "mx-5 mb-[25px]" }, { children: features.map(function (feat) { return (_jsx("li", __assign({ className: "py-2.5 text-center block border-t border-t-geyser first:border-0" }, { children: feat }), feat)); }) }), void 0), _jsx(Button, __assign({ path: path, fullwidth: true, className: "uppercase text-sm font-medium tracking-wider" }, { children: "Start Free Trial" }), void 0)] }), void 0));
};
export default Pricing02;
//# sourceMappingURL=index.js.map