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
var TimelineBody = function (_a) {
    var className = _a.className, children = _a.children, isDay = _a.isDay;
    var beforeClasses = "before:absolute before:content-[''] before:-left-2 before:w-[13px] before:h-[13px] before:border-[3px] before:border-primary before:rounded-full before:z-20";
    var afterClasses = "after:absolute after:content-[''] after:top-0 after:-left-[2px] after:bottom-0 after:w-px after:bg-ghost after:z-10";
    var dayBeforeClasses = isDay && "before:bg-primary before:top-[2px]";
    return (_jsx("div", __assign({ className: clsx("timeline-body relative pl-3.8 pb-[30px] md:pl-[25px]", className, beforeClasses, afterClasses, dayBeforeClasses, !isDay && "before:bg-white before:top-[5px]") }, { children: children }), void 0));
};
TimelineBody.displayName = "TimelineBody";
export default TimelineBody;
//# sourceMappingURL=timeline-body.js.map