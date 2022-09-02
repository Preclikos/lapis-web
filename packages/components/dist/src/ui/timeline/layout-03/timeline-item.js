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
    return (_jsx("div", __assign({ className: clsx("timeline-item relative pl-5 pb-5 border-l border-l-geyser ml-1.5 before:absolute before:content-[''] before:top-0.5 before:-left-[7px] before:h-[13px] before:w-[13px] before:rounded-full before:border-[3px] before:border-primary before:bg-white z-40", className) }, { children: children }), void 0));
};
export default TimelineItem;
//# sourceMappingURL=timeline-item.js.map