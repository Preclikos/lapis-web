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
var ExpandButton = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (_jsx("button", __assign({ type: "button", onClick: onClick, className: clsx(className, "menu-expand absolute right-0 top-0 w-9 h-9 text-center bg-gray-600 text-gray-50 text-lg") }, { children: _jsx("i", { className: "icon fa fa-angle-down" }, void 0) }), void 0));
};
export default ExpandButton;
//# sourceMappingURL=expand-button.js.map