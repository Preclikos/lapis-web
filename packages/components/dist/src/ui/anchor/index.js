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
import { Link } from "react-router-dom";
var Anchor = function (_a) {
    var path = _a.path, children = _a.children, className = _a.className, rel = _a.rel, label = _a.label, target = _a.target, onClick = _a.onClick, rest = __rest(_a, ["path", "children", "className", "rel", "label", "target", "onClick"]);
    var internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        var isHash = path.startsWith("#");
        if (isHash) {
            return (_jsx("a", __assign({ "aria-label": label, className: className, href: path, onClick: onClick }, rest, { children: children }), void 0));
        }
        return (_jsx("a", __assign({ "aria-label": label, rel: rel, className: className, href: path, target: target, onClick: onClick }, rest, { children: children }), void 0));
    }
    return (_jsx(Link, __assign({ "aria-label": label, rel: "preload", className: className, to: path }, rest, { children: children }), void 0));
};
Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};
Anchor.displayName = "Anchor";
export default Anchor;
//# sourceMappingURL=index.js.map