import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";

let __assign = (this && this.__assign) || function () {
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

const ModalClose = function (_a) {
    let className = _a.className, children = _a.children, onClose = _a.onClose;
    return (_jsx("button", __assign({ type: "button", className: clsx(className, "close font-light text-3xl leading-none bg-transparent border-0 appearance-none text-heading cursor-pointer"), onClick: onClose, "data-dismiss": "modal", "aria-label": "Close" }, { children: _jsx("span", __assign({ "aria-hidden": "true" }, { children: children }), void 0) }), void 0));
};
ModalClose.displayName = "ModalClose";
export default ModalClose;
//# sourceMappingURL=modal-close.js.map