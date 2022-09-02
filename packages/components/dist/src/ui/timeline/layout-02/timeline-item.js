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
import { Children } from "react";
import clsx from "clsx";
var TimelineItem = function (_a) {
    var className = _a.className, isDay = _a.isDay, children = _a.children;
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "TimelineBody") {
                return _jsx(child.type, __assign({}, child.props, { isDay: isDay }), void 0);
            }
            return _jsx(child.type, __assign({}, child.props), void 0);
        }
        return null;
    });
    return (_jsx("div", __assign({ className: clsx("timeline-item flex items-start justify-start", isDay && "timeline-day", className) }, { children: RenderChild }), void 0));
};
export default TimelineItem;
//# sourceMappingURL=timeline-item.js.map