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
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
export var TabWrap = function (_a) {
    var className = _a.className, children = _a.children, justified = _a.justified, vertical = _a.vertical, variation = _a.variation;
    return (_jsx(Tabs, __assign({ className: clsx(className, "react-tabs", justified && "react-tabs--justified", vertical && "react-tabs--vertical", variation && "react-tabs--variation-".concat(variation)) }, { children: children }), void 0));
};
export var TabContent = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx(className, "react-tabs__content") }, { children: children }), void 0));
};
export { Tab, TabPanel, TabList };
//# sourceMappingURL=tab.js.map