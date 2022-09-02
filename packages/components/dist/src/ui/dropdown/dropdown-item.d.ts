import { FC } from "react";
interface IDropItem {
    path: string;
    className?: string;
    active?: boolean;
}
declare const DropdownItem: FC<IDropItem>;
export default DropdownItem;
