import { jsx as _jsx } from "react/jsx-runtime";
// import { mergeTailwindClassesAlt } from "@ht/shared/methods";
import clsx from "clsx";

// eslint-disable-next-line no-use-before-define
let __assign = (this && __assign) || function () {
    __assign = Object.assign || function(t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (let p in s) 
            {
                if (Object.prototype.hasOwnProperty.call(s, p))
                {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

const Card = function (_a) {
    let children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsx("div", __assign({ className: clsx("card relative min-h-min break-words bg-white border border-ghost", className) }, { children: children }), void 0));
};
export default Card;
//# sourceMappingURL=card.js.map