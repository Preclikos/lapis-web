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
var CloseButton = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (_jsx("button", __assign({ className: clsx("text-xl", className), onClick: onClick }, { children: _jsx("i", { className: "icon ion-close" }, void 0) }), void 0));
};
export default CloseButton;
//# sourceMappingURL=index.js.map