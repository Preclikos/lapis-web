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
var ModalHeader = function (_a) {
    var className = _a.className, children = _a.children, style = _a.style;
    return (_jsx("div", __assign({ className: clsx(className, "modal-header flex items-center justify-between p-4 border-b border-b-ghost rounded-tl rounded-tr"), style: style }, { children: children }), void 0));
};
export default ModalHeader;
//# sourceMappingURL=modal-header.js.map