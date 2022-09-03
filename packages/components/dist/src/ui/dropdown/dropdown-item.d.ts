import { FC } from "react";
interface IDropItem {
    path: string;
    className?: string;
    active?: boolean;
    onClick?: void;
}
declare const DropdownItem: FC<IDropItem>;
export default DropdownItem;
