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
var ModalFooter = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx(className, "modal-footer flex flex-wrap items-center justify-end p-3 border-t border-t-ghost rounded-bl rounded-br") }, { children: children }), void 0));
};
export default ModalFooter;
//# sourceMappingURL=modal-footer.js.map