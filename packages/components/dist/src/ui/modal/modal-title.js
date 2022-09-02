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
var ModalTitle = function (_a) {
    var className = _a.className, children = _a.children, tag = _a.tag;
    var HTMLTag = tag || "h3";
    return (_jsx(HTMLTag, __assign({ className: clsx(className, "modal-title mb-0 leading-normal") }, { children: children }), void 0));
};
export default ModalTitle;
//# sourceMappingURL=modal-title.js.map