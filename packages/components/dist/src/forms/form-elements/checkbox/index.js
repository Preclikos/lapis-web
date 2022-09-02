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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import cn from "clsx";
var Checkbox = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, id = _a.id, name = _a.name, label = _a.label, checked = _a.checked, defaultChecked = _a.defaultChecked, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, color = _a.color, restProps = __rest(_a, ["className", "disabled", "id", "name", "label", "checked", "defaultChecked", "onChange", "onClick", "onBlur", "value", "color"]);
    var pseudoClass = "before:absolute before:leading-4 before:w-4 before:h-4 before:top-px before:left-0";
    var beforeClass = "before:content[''] before:bg-white before:border before:border-solid before:border-gray-600";
    var disabledClass = disabled && "opacity-50 before:opacity-50 after:opacity-50";
    return (_jsx("div", __assign({ className: "custom-checkbox" }, { children: _jsxs("label", __assign({ className: cn("relative block leading-4", className) }, { children: [_jsx("input", __assign({ type: "checkbox", disabled: disabled, id: id, name: name, checked: checked, defaultChecked: defaultChecked, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, ref: ref, className: "opacity-0 mr-1.5 peer" }, restProps), void 0), _jsx("i", { className: cn("fa fa-check", "text-white !text-[9px] !leading-4 text-center font-normal absolute w-4 h-4 top-px left-0 z-10 !hidden peer-checked:!inline-block", color === "primary" && "bg-primary", color === "success" && "bg-success", color === "indigo" && "bg-indigo") }, void 0), _jsx("span", __assign({ className: cn("pl-1.5", pseudoClass, beforeClass, disabledClass) }, { children: label }), void 0)] }), void 0) }), void 0));
});
Checkbox.displayName = "Checkbox";
Checkbox.defaultProps = {
    color: "primary",
};
export default Checkbox;
//# sourceMappingURL=index.js.map