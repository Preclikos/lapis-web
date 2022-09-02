import { FC } from "react";
interface IDropMenu {
    show?: boolean;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    shape?: boolean;
}
declare const DropdownMenu: FC<IDropMenu>;
export default DropdownMenu;
