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
import cn from "clsx";
import Anchor from "../anchor";
var Button = function (_a) {
    var children = _a.children, type = _a.type, variant = _a.variant, color = _a.color, size = _a.size, shape = _a.shape, fullwidth = _a.fullwidth, active = _a.active, disabled = _a.disabled, iconButton = _a.iconButton, hover = _a.hover, className = _a.className, path = _a.path, restProps = __rest(_a, ["children", "type", "variant", "color", "size", "shape", "fullwidth", "active", "disabled", "iconButton", "hover", "className", "path"]);
    var baseClass = variant !== "texted" &&
        "inline-flex items-center justify-center font-normal text-center whitespace-normal border border-solid leading-body transition-colors min-w-max";
    var disabledClass = "opacity-[0.65] cursor-default";
    var containedBase = color !== "light" && "border-transparent text-white";
    var outlinedBase = "active:text-white";
    // Primary Button
    var containedPrimaryClass = "bg-primary border-primary";
    var containedPrimaryHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-primary-100 hover:border-primary-200 focus:shadow-primary/50 focus:shadow-xs";
    var containedPrimaryActiveClass = !disabled &&
        active &&
        hover &&
        "bg-primary-200 border-primary-300 active:bg-primary-200 active:border-primary-300";
    var containedPrimaryBtn = color === "primary" && [
        containedPrimaryClass,
        containedPrimaryHoverClass,
        containedPrimaryActiveClass,
    ];
    var outlinedPrimaryClass = "bg-transparent border-primary text-primary";
    var outlinedPrimaryHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-primary hover:text-white focus:shadow-primary/50 focus:shadow-xs";
    var outlinedPrimaryActiveClass = !disabled &&
        active &&
        hover &&
        "bg-primary border-primary text-white active:bg-primary active:bg-primary";
    var outlinedPrimaryBtn = color === "primary" && [
        outlinedPrimaryClass,
        outlinedPrimaryHoverClass,
        outlinedPrimaryActiveClass,
    ];
    var textedPrimaryClass = color === "primary" && "text-primary";
    // Secondary Button
    var containedSecondaryClass = "bg-secondary border-secondary";
    var containedSecondaryHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-secondary-100 hover:border-secondary-200 focus:shadow-secondary/50 focus:shadow-xs";
    var containedSecondaryActiveClass = !disabled &&
        active &&
        hover &&
        "bg-secondary-200 border-secondary-300 active:bg-secondary-200 active:border-secondary-300";
    var containedSecondaryBtn = color === "secondary" && [
        containedSecondaryClass,
        containedSecondaryHoverClass,
        containedSecondaryActiveClass,
    ];
    var outlinedSecondaryClass = "bg-transparent border-secondary text-secondary";
    var outlinedSecondaryHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-secondary hover:text-white focus:shadow-secondary/50 focus:shadow-xs";
    var outlinedSecondaryActiveClass = !disabled &&
        active &&
        hover &&
        "bg-secondary border-secondary text-white active:bg-secondary active:bg-secondary";
    var outlinedSecondaryBtn = color === "secondary" && [
        outlinedSecondaryClass,
        outlinedSecondaryHoverClass,
        outlinedSecondaryActiveClass,
    ];
    var textedSecondaryClass = color === "secondary" && "text-secondary";
    // Success Button
    var containedSuccessClass = "bg-success border-success";
    var containedSuccessHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-success-100 hover:border-success-200 focus:shadow-success/50 focus:shadow-xs";
    var containedSuccessActiveClass = !disabled &&
        active &&
        hover &&
        "bg-success-200 border-success-300 active:bg-success-200 active:border-success-300";
    var containedSuccessBtn = color === "success" && [
        containedSuccessClass,
        containedSuccessHoverClass,
        containedSuccessActiveClass,
    ];
    var outlinedSuccessClass = "bg-transparent border-success text-success";
    var outlinedSuccessHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-success hover:text-white focus:shadow-success/50 focus:shadow-xs";
    var outlinedSuccessActiveClass = !disabled &&
        active &&
        hover &&
        "bg-success border-success text-white active:bg-success active:bg-success";
    var outlinedSuccessBtn = color === "success" && [
        outlinedSuccessClass,
        outlinedSuccessHoverClass,
        outlinedSuccessActiveClass,
    ];
    var textedSuccessClass = color === "success" && "text-success";
    // Danger Button
    var containedDangerClass = "bg-danger border-danger";
    var containedDangerHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-danger-100 hover:border-danger-200 focus:shadow-danger/50 focus:shadow-xs";
    var containedDangerActiveClass = !disabled &&
        active &&
        hover &&
        "bg-danger-200 border-danger-300 active:bg-danger-200 active:border-danger-300";
    var containedDangerBtn = color === "danger" && [
        containedDangerClass,
        containedDangerHoverClass,
        containedDangerActiveClass,
    ];
    var outlinedDangerClass = "bg-transparent border-danger text-danger";
    var outlinedDangerHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-danger hover:text-white focus:shadow-danger/50 focus:shadow-xs";
    var outlinedDangerActiveClass = !disabled &&
        active &&
        hover &&
        "bg-danger border-danger text-white active:bg-danger active:bg-danger";
    var outlinedDangerBtn = color === "danger" && [
        outlinedDangerClass,
        outlinedDangerHoverClass,
        outlinedDangerActiveClass,
    ];
    var textedDangerClass = color === "danger" && "text-danger";
    // Warning Button
    var containedWarningClass = "bg-warning border-warning";
    var containedWarningHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-warning-100 hover:border-warning-200 focus:shadow-warning/50 focus:shadow-xs";
    var containedWarningActiveClass = !disabled &&
        active &&
        hover &&
        "bg-warning-200 border-warning-300 active:bg-warning-200 active:border-warning-300";
    var containedWarningBtn = color === "warning" && [
        containedWarningClass,
        containedWarningHoverClass,
        containedWarningActiveClass,
    ];
    var outlinedWarningClass = "bg-transparent border-warning text-warning";
    var outlinedWarningHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-warning hover:text-white focus:shadow-warning/50 focus:shadow-xs";
    var outlinedWarningActiveClass = !disabled &&
        active &&
        hover &&
        "bg-warning border-warning text-white active:bg-warning active:bg-warning";
    var outlinedWarningBtn = color === "warning" && [
        outlinedWarningClass,
        outlinedWarningHoverClass,
        outlinedWarningActiveClass,
    ];
    var textedWarningClass = color === "warning" && "text-warning";
    // Info Button
    var containedInfoClass = "bg-info border-info";
    var containedInfoHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-info-100 hover:border-info-200 focus:shadow-info/50 focus:shadow-xs";
    var containedInfoActiveClass = !disabled &&
        active &&
        hover &&
        "bg-info-200 border-info-300 active:bg-info-200 active:border-info-300";
    var containedInfoBtn = color === "info" && [
        containedInfoClass,
        containedInfoHoverClass,
        containedInfoActiveClass,
    ];
    var outlinedInfoClass = "bg-transparent border-info text-info";
    var outlinedInfoHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-info hover:text-white focus:shadow-info/50 focus:shadow-xs";
    var outlinedInfoActiveClass = !disabled &&
        active &&
        hover &&
        "bg-info border-info text-white active:bg-info active:bg-info";
    var outlinedInfoBtn = color === "info" && [
        outlinedInfoClass,
        outlinedInfoHoverClass,
        outlinedInfoActiveClass,
    ];
    var textedInfoClass = color === "info" && "text-info";
    // Light Button
    var containedLightClass = "bg-gray-200 border-ghost text-body";
    var containedLightHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-white hover:border-gray-550 hover:text-heading focus:shadow-info/50 focus:shadow-xs";
    var containedLightActiveClass = !disabled &&
        active &&
        hover &&
        "bg-gray-800 border-gray-700 active:bg-gray-800 active:bg-gray-800";
    var containedLightBtn = color === "light" && [
        containedLightClass,
        containedLightHoverClass,
        containedLightActiveClass,
    ];
    var outlinedLightClass = "bg-transparent border-gray-600 text-body";
    var outlinedLightHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-gray-600 hover:text-white focus:shadow-gray-600/50 focus:shadow-xs";
    var outlinedLightActiveClass = !disabled &&
        active &&
        hover &&
        "bg-gray-800 border-gray-700 text-white active:bg-gray-800 active:bg-gray-800";
    var outlinedLightBtn = color === "light" && [
        outlinedLightClass,
        outlinedLightHoverClass,
        outlinedLightActiveClass,
    ];
    var textedLightClass = color === "light" &&
        "text-heading hover:text-primary focus:text-primary";
    // Purple Button
    var containedPurpleClass = "bg-purple border-purple";
    var containedPurpleHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-purple-100 hover:border-purple-200 focus:shadow-purple/50 focus:shadow-xs";
    var containedPurpleActiveClass = !disabled &&
        active &&
        hover &&
        "bg-purple-200 border-purple-300 active:bg-purple-200 active:border-purple-300";
    var containedPurpleBtn = color === "purple" && [
        containedPurpleClass,
        containedPurpleHoverClass,
        containedPurpleActiveClass,
    ];
    var outlinedPurpleClass = "bg-transparent border-purple text-purple";
    var outlinedPurpleHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-purple hover:text-white focus:shadow-purple/50 focus:shadow-xs";
    var outlinedPurpleActiveClass = !disabled &&
        active &&
        hover &&
        "bg-purple border-purple text-white active:bg-purple active:bg-purple";
    var outlinedPurpleBtn = color === "purple" && [
        outlinedPurpleClass,
        outlinedPurpleHoverClass,
        outlinedPurpleActiveClass,
    ];
    var textedPurpleClass = color === "purple" && "text-purple";
    // Facebook Button
    var containedFacebookClass = "bg-facebook border-facebook";
    var containedFacebookHoverClass = !disabled &&
        !active &&
        hover &&
        "focus:shadow-facebook/50 focus:shadow-xs";
    var containedFacebookActiveClass = !disabled &&
        active &&
        hover &&
        "focus:shadow-facebook/50 focus:shadow-xs";
    var containedFacebookBtn = color === "facebook" && [
        containedFacebookClass,
        containedFacebookHoverClass,
        containedFacebookActiveClass,
    ];
    var outlinedFacebookClass = "bg-transparent border-facebook text-facebook";
    var outlinedFacebookHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-facebook hover:text-white focus:shadow-facebook/50 focus:shadow-xs";
    var outlinedFacebookActiveClass = !disabled &&
        active &&
        hover &&
        "bg-facebook border-facebook text-white active:bg-facebook active:bg-facebook";
    var outlinedFacebookBtn = color === "facebook" && [
        outlinedFacebookClass,
        outlinedFacebookHoverClass,
        outlinedFacebookActiveClass,
    ];
    var textedFacebookClass = color === "facebook" && "text-facebook";
    // Twitter Button
    var containedTwitterClass = "bg-twitter border-twitter";
    var containedTwitterHoverClass = !disabled &&
        !active &&
        hover &&
        "focus:shadow-twitter/50 focus:shadow-xs";
    var containedTwitterActiveClass = !disabled &&
        active &&
        hover &&
        "focus:shadow-twitter/50 focus:shadow-xs";
    var containedTwitterBtn = color === "twitter" && [
        containedTwitterClass,
        containedTwitterHoverClass,
        containedTwitterActiveClass,
    ];
    var outlinedTwitterClass = "bg-transparent border-twitter text-twitter";
    var outlinedTwitterHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-twitter hover:text-white focus:shadow-twitter/50 focus:shadow-xs";
    var outlinedTwitterActiveClass = !disabled &&
        active &&
        hover &&
        "bg-twitter border-twitter text-white active:bg-twitter active:bg-twitter";
    var outlinedTwitterBtn = color === "twitter" && [
        outlinedTwitterClass,
        outlinedTwitterHoverClass,
        outlinedTwitterActiveClass,
    ];
    var textedTwitterClass = color === "twitter" && "text-twitter";
    // Royal Button
    var containedRoyalClass = "bg-royal border-royal";
    var containedRoyalHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-royal-100 hover:border-royal-250 focus:shadow-royal/50 focus:shadow-xs";
    var containedRoyalActiveClass = !disabled &&
        active &&
        hover &&
        "bg-royal-200 border-royal-300 active:bg-royal-200 active:border-royal-300";
    var containedRoyalBtn = color === "royal" && [
        containedRoyalClass,
        containedRoyalHoverClass,
        containedRoyalActiveClass,
    ];
    var outlinedRoyalClass = "bg-transparent border-royal text-royal";
    var outlinedRoyalHoverClass = !disabled &&
        !active &&
        hover &&
        "hover:bg-royal hover:text-white focus:shadow-royal/50 focus:shadow-xs";
    var outlinedRoyalActiveClass = !disabled &&
        active &&
        hover &&
        "bg-royal border-royal text-white active:bg-royal active:bg-royal";
    var outlinedRoyalBtn = color === "royal" && [
        outlinedRoyalClass,
        outlinedRoyalHoverClass,
        outlinedRoyalActiveClass,
    ];
    var textedRoyalClass = color === "royal" && "text-royal";
    // Buton Sizes
    var smBtn = size === "sm" && "text-sm px-2 py-1";
    var mdBtn = size === "md" && "text-base px-3 py-[0.594rem]";
    var lgBtn = size === "lg" && "text-md px-4 py-2";
    // Texted Button Sizes
    var smTextedBtn = size === "sm" && "text-sm";
    var mdTextedBtn = size === "md" && "text-base";
    var lgTextedBtn = size === "lg" && "text-md";
    // Icon Button Sizes
    var smIconBtn = size === "sm" && "w-[30px] h-[30px] text-sm";
    var mdIconBtn = size === "md" && "w-[35px] h-[35px] text-base";
    var lgIconBtn = size === "lg" && "w-10 h-10 text-base";
    // Button Shapes
    var roundedBtn = shape === "rounded" && "rounded-sm";
    var ellipseBtn = shape === "ellipse" && "rounded-full";
    var fullBtn = fullwidth && "flex w-full";
    var allClasses = [
        baseClass,
        variant === "contained" && containedBase,
        variant === "outlined" && outlinedBase,
        variant === "contained" &&
            (containedPrimaryBtn ||
                containedSecondaryBtn ||
                containedSuccessBtn ||
                containedDangerBtn ||
                containedWarningBtn ||
                containedInfoBtn ||
                containedLightBtn ||
                containedPurpleBtn ||
                containedRoyalBtn ||
                containedFacebookBtn ||
                containedTwitterBtn),
        variant === "outlined" &&
            (outlinedPrimaryBtn ||
                outlinedSecondaryBtn ||
                outlinedSuccessBtn ||
                outlinedDangerBtn ||
                outlinedWarningBtn ||
                outlinedInfoBtn ||
                outlinedLightBtn ||
                outlinedPurpleBtn ||
                outlinedRoyalBtn ||
                outlinedFacebookBtn ||
                outlinedTwitterBtn),
        variant === "texted" &&
            (textedPrimaryClass ||
                textedSecondaryClass ||
                textedSuccessClass ||
                textedDangerClass ||
                textedWarningClass ||
                textedInfoClass ||
                textedLightClass ||
                textedPurpleClass ||
                textedRoyalClass ||
                textedFacebookClass ||
                textedTwitterClass),
        !iconButton &&
            (variant === "contained" || variant === "outlined") &&
            (smBtn || mdBtn || lgBtn),
        variant === "texted" && (smTextedBtn || mdTextedBtn || lgTextedBtn),
        iconButton && (smIconBtn || mdIconBtn || lgIconBtn),
        roundedBtn,
        ellipseBtn,
        fullBtn,
        disabled && disabledClass,
        className,
    ];
    if (path) {
        return (_jsx(Anchor, __assign({ path: path, className: cn(allClasses) }, restProps, { children: children }), void 0));
    }
    else {
        return (_jsx("button", __assign({ type: type, className: cn(allClasses) }, restProps, { children: children }), void 0));
    }
};
Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "square",
    fullwidth: false,
    active: false,
    disabled: false,
    iconButton: false,
    hover: true,
};
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=button.js.map