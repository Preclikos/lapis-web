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

const ModalTitle = function (_a) {
    let className = _a.className, children = _a.children, tag = _a.tag;
    let HTMLTag = tag || "h3";
    return (_jsx(HTMLTag, __assign({ className: clsx(className, "modal-title mb-0 leading-normal") }, { children: children }), void 0));
};
export default ModalTitle;
//# sourceMappingURL=modal-title.js.map