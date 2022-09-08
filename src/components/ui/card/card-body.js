import { jsx as _jsx } from "react/jsx-runtime";
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

const CardBody = function (_a) {
    let children = _a.children, className = _a.className;
    return (_jsx("div", __assign({ className: clsx("card-body flex-auto p-5", className) }, { children: children }), void 0));
};
export default CardBody;
//# sourceMappingURL=card-body.js.map