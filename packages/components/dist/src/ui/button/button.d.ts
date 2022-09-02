import { FC } from "react";
export interface ButtonProps {
    /**
     * Required.
     */
    children: React.ReactNode;
    /**
     * Optional. Default is `button`.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Optional. Default is `contained`.
     */
    variant?: "contained" | "outlined" | "texted";
    /**
     * Optional. Default is `primary`.
     */
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "purple" | "facebook" | "twitter" | "royal";
    /**
     * Optional. Default is `md`.
     */
    size?: "sm" | "md" | "lg";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "ellipse";
    /**
     * Pass fullwidth to make button fullwidth.
     */
    fullwidth?: boolean;
    /**
     * Pass active to enable active state.
     */
    active?: boolean;
    /**
     * Pass disabled to enable disabled state.
     */
    disabled?: boolean;
    /**
     * Pass iconButton to get Icon Button style.
     */
    iconButton?: boolean;
    /**
     * Optional. onClick function
     */
    onClick?: () => void;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
    /**
     * Pass `path` to make link button
     */
    path?: string;
    /**
     * Optional. Pass label if button does not contain any text
     */
    label?: string;
    /**
     * Optional. Pass false if you don't need hover and focus
     */
    hover?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
