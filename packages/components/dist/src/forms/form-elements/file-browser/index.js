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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import clsx from "clsx";
import Feedback from "../feedback";
var FileBrowser = forwardRef(function (_a, ref) {
    var className = _a.className, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, label = _a.label, showState = _a.showState, showErrorOnly = _a.showErrorOnly, color = _a.color, restProps = __rest(_a, ["className", "state", "feedbackText", "id", "name", "onChange", "onClick", "onBlur", "value", "label", "showState", "showErrorOnly", "color"]);
    var labelClass = "absolute inset-0 z-10 h-full py-[0.54rem] px-3 leading-tight text-heading bg-white border border-solid border-ghost";
    var labelAfterClass = "after:absolute after:z-20 after:block after:py-3 after:px-3 after:leading-tight after:border-l after:border-l-solid after:content-['Browse']";
    var grayColorClass = color === "gray" &&
        "after:text-heading after:border-l-ghost after:bg-gray-300";
    var primaryColorClass = color === "primary" &&
        "after:text-white after:border-l-transparent after:bg-primary";
    var inverseColorClass = color === "inverse" &&
        "after:text-white after:border-l-transparent after:bg-heading";
    var defaultPositionClass = color === "gray" && "after:inset-0 after:left-auto";
    var positionClass = color !== "gray" && "after:inset-[-1px] after:left-auto";
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: clsx("relative h-[2.625rem] file-browser", className) }, { children: [_jsx("input", __assign({ type: "file", className: "relative h-full w-full opacity-0 peer", id: id, name: name, ref: ref, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, multiple: true }, restProps), void 0), _jsx("label", __assign({ className: clsx(labelClass, labelAfterClass, grayColorClass, primaryColorClass, inverseColorClass, defaultPositionClass, positionClass, "peer-focus:border-blue-100 peer-focus:shadow-primary/25 peer-focus:shadow-xs"), htmlFor: id }, { children: label }), void 0)] }), void 0), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }, void 0));
});
FileBrowser.displayName = "FileBrowser";
FileBrowser.defaultProps = {
    color: "gray",
    showErrorOnly: true,
};
export default FileBrowser;
//# sourceMappingURL=index.js.map