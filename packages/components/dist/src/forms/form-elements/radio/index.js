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
import Feedback from "../feedback";
var Radio = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, id = _a.id, name = _a.name, label = _a.label, state = _a.state, checked = _a.checked, defaultChecked = _a.defaultChecked, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, color = _a.color, showState = _a.showState, showErrorOnly = _a.showErrorOnly, feedbackText = _a.feedbackText, restProps = __rest(_a, ["className", "disabled", "id", "name", "label", "state", "checked", "defaultChecked", "onChange", "onClick", "onBlur", "value", "color", "showState", "showErrorOnly", "feedbackText"]);
    var pseudoClass = "before:absolute before:leading-4 after:absolute after:leading-4";
    var beforeClass = "before:content[''] before:bg-white before:border before:border-solid before:border-gray-600 before:w-4 before:h-4 before:top-0.5 before:left-0 before:rounded-full peer-checked:before:border-transparent";
    var afterClass = "after:content-[''] after:bg-white after:w-1.5 after:h-1.5 after:rounded-full after:top-[7px] after:left-[5px] after:hidden peer-checked:after:block";
    var disabledClass = disabled && "opacity-50 before:opacity-50 after:opacity-50";
    return (_jsxs("div", __assign({ className: "custom-radio" }, { children: [_jsxs("label", __assign({ className: cn("relative block leading-4", color, className) }, { children: [_jsx("input", __assign({ type: "radio", disabled: disabled, id: id, name: name, checked: checked, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, ref: ref, defaultChecked: defaultChecked, className: "opacity-0 mr-1.5 peer" }, restProps), void 0), _jsx("span", __assign({ className: cn("pl-1.5", pseudoClass, beforeClass, afterClass, disabledClass, color === "primary" &&
                            "peer-checked:before:bg-primary", color === "success" &&
                            "peer-checked:before:bg-success", color === "indigo" &&
                            "peer-checked:before:bg-indigo") }, { children: label }), void 0)] }), void 0), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }), void 0));
});
Radio.displayName = "Radio";
Radio.defaultProps = {
    color: "primary",
    showState: true,
    showErrorOnly: true,
};
export default Radio;
//# sourceMappingURL=index.js.map