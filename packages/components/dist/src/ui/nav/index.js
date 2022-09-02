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
var Nav = function (_a) {
    var children = _a.children, className = _a.className, layout = _a.layout;
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "NavLink") {
                return _jsx(child.type, __assign({}, child.props, { layout: layout }), void 0);
            }
        }
        return null;
    });
    return (_jsx("nav", __assign({ className: clsx("nav flex flex-wrap", className) }, { children: RenderChild }), void 0));
};
export { default as NavLink } from "./nav-link";
export default Nav;
//# sourceMappingURL=index.js.map