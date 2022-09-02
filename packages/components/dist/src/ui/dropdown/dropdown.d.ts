import { FC } from "react";
interface DropdownProps {
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    /**
     * Optional. Default is `false`.
     */
    shape?: boolean;
    /**
     * Optional. Default is `true`.
     */
    showIcon?: boolean;
    /**
     * Optional. Pass Extra Class Names
     */
    className?: string;
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
