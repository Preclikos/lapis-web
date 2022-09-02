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
import { Children, isValidElement, cloneElement } from "react";
import clsx from "clsx";
var BasicTable = function (_a) {
    var children = _a.children, className = _a.className, striped = _a.striped, bordered = _a.bordered, hover = _a.hover, theadColor = _a.theadColor, color = _a.color;
    var baseTHClass = "uppercase bg-geyser text-heading tracking-wide text-xs font-bold p-3";
    var baseTDClass = "p-3 text-gray-650 text-left";
    var borderedClass = bordered && "border border-geyser border-t-0 border-l-0 first:border-l";
    var notBorderdClass = !bordered && "border-t border-t-geyser";
    var coloredTheadClass = [
        (theadColor || color) && "text-white border-white/50",
        (theadColor === "primary" || color === "primary") && "bg-primary",
        (theadColor === "secondary" || color === "secondary") && "bg-secondary",
        (theadColor === "success" || color === "success") && "bg-success",
        (theadColor === "warning" || color === "warning") && "bg-warning",
        (theadColor === "danger" || color === "danger") && "bg-danger",
        (theadColor === "info" || color === "info") && "bg-info",
        (theadColor === "teal" || color === "teal") && "bg-teal",
        (theadColor === "indigo" || color === "indigo") && "bg-indigo",
        (theadColor === "purple" || color === "purple") && "bg-purple",
        (theadColor === "pink" || color === "pink") && "bg-pink",
        (theadColor === "orange" || color === "orange") && "bg-orange",
    ];
    var coloredBodyClass = [
        color && "border-white",
        color === "primary" && "bg-primary-50",
        color === "secondary" && "bg-secondary-50",
        color === "success" && "bg-success-50",
        color === "warning" && "bg-warning-50",
        color === "danger" && "bg-danger-50",
        color === "info" && "bg-info-50",
        color === "teal" && "bg-teal-50",
        color === "indigo" && "bg-indigo-50",
        color === "purple" && "bg-purple-50",
        color === "pink" && "bg-pink-50",
        color === "orange" && "bg-orange-50",
    ];
    var iterateOverChildren = function (reactChildren, parent) {
        return Children.map(reactChildren, function (child) {
            if (!isValidElement(child))
                return child;
            var props = __assign({}, child.props);
            var childType = child.props.originalType || child.type;
            var name = childType.displayName;
            if (parent === "thead") {
                return cloneElement(child, __assign(__assign({}, props), { className: clsx((childType === "th" ||
                        childType === "td" ||
                        name === "th" ||
                        name === "td") && [
                        baseTHClass,
                        coloredTheadClass,
                        borderedClass,
                    ], child.props.className), children: iterateOverChildren(child.props.children, parent) }));
            }
            if (parent === "tbody") {
                return cloneElement(child, __assign(__assign({}, props), { className: clsx((childType === "th" ||
                        childType === "td" ||
                        name === "th" ||
                        name === "td") && [
                        baseTDClass,
                        borderedClass,
                        notBorderdClass,
                        coloredBodyClass,
                    ], (childType === "th" || name === "th") &&
                        "!text-heading font-medium", (childType === "tr" || name === "tr") && [
                        striped && "odd:bg-gray-200",
                        hover && "hover:bg-black/[0.075]",
                    ], child.props.className), children: iterateOverChildren(child.props.children, parent) }));
            }
        });
    };
    var renderChildren = Children.map(children, function (child) {
        if (!isValidElement(child))
            return child;
        var props = __assign({}, child.props);
        var childType = child.props.originalType || child.type;
        if (childType === "thead" || childType === "tbody") {
            return cloneElement(child, __assign(__assign({}, props), { children: iterateOverChildren(child.props.children, childType) }));
        }
        return cloneElement(child, __assign(__assign({}, props), { children: child.props.children }));
    });
    return (_jsx("div", __assign({ className: "table-responsive" }, { children: _jsx("table", __assign({ className: clsx("table w-full", className) }, { children: renderChildren }), void 0) }), void 0));
};
export default BasicTable;
//# sourceMappingURL=table.js.map