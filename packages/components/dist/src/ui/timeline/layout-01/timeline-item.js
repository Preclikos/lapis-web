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
var TimelineItem = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx("timeline-item flex items-start relative before:absolute before:content-[''] before:top-0 before:left-[25px] before:h-full before:border-l before:border-ghost z-40", className) }, { children: children }), void 0));
};
export default TimelineItem;
//# sourceMappingURL=timeline-item.js.map