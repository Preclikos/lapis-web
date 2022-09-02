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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import clsx from "clsx";
var ListGroup = function (_a) {
    var className = _a.className, children = _a.children, flush = _a.flush, horizontal = _a.horizontal, as = _a.as, restProps = __rest(_a, ["className", "children", "flush", "horizontal", "as"]);
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "ListGroupItem") {
                return (_jsx(child.type, __assign({}, child.props, { flush: flush, horizontal: horizontal }), void 0));
            }
        }
        return child;
    });
    var Tag = as || "ul";
    return (_jsx(Tag, __assign({ className: clsx(className, "list-group flex", !horizontal ? "flex-col" : "flex-row") }, restProps, { children: RenderChild }), void 0));
};
export default ListGroup;
//# sourceMappingURL=list-group.js.map