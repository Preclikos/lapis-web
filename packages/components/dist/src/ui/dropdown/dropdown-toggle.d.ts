import { FC } from "react";
import { ButtonProps } from "../button/button";
interface IToggleProps extends ButtonProps {
    direction?: "up" | "down" | "left" | "right";
    showIcon?: boolean;
    show?: boolean;
    customStyle?: "only-icon";
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light";
    iconClass?: string;
}
declare const DropdownToggle: FC<IToggleProps>;
export default DropdownToggle;
