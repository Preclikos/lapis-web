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
var NavItem = function (_a) {
    var children = _a.children, hasChildren = _a.hasChildren, isMegaMenu = _a.isMegaMenu;
    var baseClass = "nav-item flex-1 text-center lg:flex-auto xl:flex-1";
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "NavLink") {
                return (_jsx(child.type, __assign({}, child.props, { hasChildren: hasChildren }), void 0));
            }
            return _jsx(child.type, __assign({}, child.props), void 0);
        }
        return null;
    });
    return (_jsx("li", __assign({ className: clsx(baseClass, !isMegaMenu && hasChildren && "lg:relative", isMegaMenu && "static", "group") }, { children: RenderChild }), void 0));
};
export default NavItem;
//# sourceMappingURL=nav-item.js.map