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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ReactSelect from "react-select";
import Feedback from "../feedback";
var groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};
var groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
};
var formatGroupLabel = function (data) { return (_jsxs("div", __assign({ style: groupStyles }, { children: [_jsx("span", { children: data.label }, void 0), _jsx("span", __assign({ style: groupBadgeStyles }, { children: data.options.length }), void 0)] }), void 0)); };
var DropdownIndicator = function () {
    return (_jsx("span", __assign({ className: "w-8 h-full inline-flex justify-center items-center" }, { children: _jsx("i", { className: "fa fa-caret-down" }, void 0) }), void 0));
};
var Select = function (_a) {
    var options = _a.options, defaultValue = _a.defaultValue, value = _a.value, isClearable = _a.isClearable, isDisabled = _a.isDisabled, isLoading = _a.isLoading, isRtl = _a.isRtl, isSearchable = _a.isSearchable, isMulti = _a.isMulti, placeholder = _a.placeholder, onChange = _a.onChange, showState = _a.showState, showErrorOnly = _a.showErrorOnly, state = _a.state, feedbackText = _a.feedbackText;
    var customStyles = {
        control: function (provided, inputState) { return (__assign(__assign({}, provided), { borderRadius: 0, height: 40, boxShadow: "none", "&:hover": {
                borderColor: inputState.isFocused && "#1b84e7",
            } })); },
        menu: function (provided) { return (__assign(__assign({}, provided), { borderRadius: 0, padding: 5, marginTop: 0, boxShadow: "none", border: "1px solid #e6e6e6" })); },
        option: function (provided, inputState) { return (__assign(__assign({}, provided), { color: inputState.isFocused && inputState.isSelected
                ? "#fff"
                : inputState.isSelected
                    ? "#868ba1"
                    : inputState.isFocused
                        ? "#fff"
                        : "#868ba1", backgroundColor: inputState.isFocused && inputState.isSelected
                ? "#1b84e7"
                : inputState.isSelected
                    ? "transparent"
                    : inputState.isFocused
                        ? "#1b84e7"
                        : inputState.isDisabled
                            ? "#d8d9d9"
                            : "transparent", cursor: inputState.isDisabled ? "not-allowed" : "pointer", "&:hover": {
                backgroundColor: !inputState.isDisabled && "#1b84e7",
                color: !inputState.isDisabled && "#fff",
            } })); },
        multiValue: function (provided, inputState) { return (__assign(__assign({}, provided), { backgroundColor: inputState.isDisabled ? "#adb5bd" : "#1b84e7", borderRadius: 0, flexDirection: "row-reverse" })); },
        multiValueLabel: function (provided, inputState) { return (__assign(__assign({}, provided), { color: "#fff", paddingRight: 10, paddingLeft: (inputState === null || inputState === void 0 ? void 0 : inputState.isDisabled) ? 10 : 0, paddingTop: 5 })); },
        multiValueRemove: function (provided, inputState) { return (__assign(__assign({}, provided), { color: "#fff", opacity: 0.5, padding: 2, display: inputState.isDisabled ? "none" : "inline", "&:hover": {
                backgroundColor: "transparent",
                color: "#fff",
                opacity: 1,
            } })); },
        indicatorSeparator: function () { return ({
            display: "none",
        }); },
    };
    return (_jsxs(_Fragment, { children: [_jsx(ReactSelect, { styles: customStyles, options: options, defaultValue: defaultValue, isClearable: isClearable, isDisabled: isDisabled, isLoading: isLoading, isRtl: isRtl, isSearchable: isSearchable, isMulti: isMulti, formatGroupLabel: formatGroupLabel, placeholder: placeholder, components: { DropdownIndicator: DropdownIndicator }, value: value, onChange: onChange }, void 0), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }, void 0));
};
Select.displayName = "Select";
export default Select;
//# sourceMappingURL=index.js.map