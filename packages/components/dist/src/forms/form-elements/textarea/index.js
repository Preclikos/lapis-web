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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import cn from "clsx";
import Feedback from "../feedback";
var Textarea = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, readonly = _a.readonly, showState = _a.showState, showErrorOnly = _a.showErrorOnly, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "disabled", "state", "feedbackText", "id", "name", "onChange", "onClick", "onBlur", "value", "readonly", "showState", "showErrorOnly", "customStyle"]);
    var defaultClass = "block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body";
    var focusClass = customStyle !== "nofocus" &&
        !readonly &&
        "focus:shadow-none focus:outline-0 focus:text-body focus:bg-white";
    var readOnlyAndDisabledClass = (readonly || disabled) && "bg-gray-300 opacity-100";
    var readOnlyFocusClass = customStyle !== "nofocus" &&
        readonly &&
        "focus:shadow-none focus:outline-0  focus:text-body";
    var successClass = !showErrorOnly && state === "success" && "!border-success";
    var warningClass = !showErrorOnly && state === "warning" && "!border-warning";
    var errorClass = state === "error" && "!border-danger";
    var focusBorderClass = customStyle !== "nofocus" && !state && "focus:border-blue-100";
    var noFocusClass = customStyle === "nofocus" && "focus:outline-0";
    return (_jsxs(_Fragment, { children: [_jsx("textarea", __assign({ disabled: disabled, ref: ref, className: cn("form-control", defaultClass, focusClass, readOnlyAndDisabledClass, readOnlyFocusClass, successClass, warningClass, errorClass, focusBorderClass, noFocusClass, className), id: id, name: name, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, readOnly: readonly }, restProps), void 0), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }, void 0));
});
Textarea.displayName = "Textarea ";
Textarea.defaultProps = {
    rows: 3,
    showState: true,
    showErrorOnly: true,
};
export default Textarea;
//# sourceMappingURL=index.js.map