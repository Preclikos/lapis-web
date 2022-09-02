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
var Offcanvas = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, className = _a.className;
    return (_jsx("div", __assign({ className: clsx("fixed inset-0 z-50 overflow-y-hidden bg-black/70 cursor-crosshair transition-[visibility] duration-200", !isOpen && "invisible", isOpen && "visible"), onClick: onClose, onKeyPress: function (e) { return e; }, role: "button", tabIndex: -1 }, { children: _jsx("div", __assign({ className: clsx("offcanvas w-[18.75rem] h-full ml-auto overflow-x-hidden overflow-y-auto bg-gray-500 cursor-auto transition-transform duration-300", !isOpen && "translate-x-[120%]", isOpen && "translate-x-0", className), onClick: function (e) { return e.stopPropagation(); }, onKeyPress: function (e) { return e; }, role: "button", tabIndex: -1 }, { children: children }), void 0) }), void 0));
};
export { default as OffcanvasHeader } from "./header";
export { default as OffcanvasBody } from "./body";
export default Offcanvas;
//# sourceMappingURL=index.js.map