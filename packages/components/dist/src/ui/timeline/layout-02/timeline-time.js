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
var TimelineTime = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx("timeline-time inline-block pr-3.8 pt-px w-[70px] flex-shrink-0 text-right text-xs md:pt-0 md:pr-[25px] md:w-[100px] md:text-base", className) }, { children: children }), void 0));
};
export default TimelineTime;
//# sourceMappingURL=timeline-time.js.map