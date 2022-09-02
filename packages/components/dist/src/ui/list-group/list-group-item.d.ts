import { FC } from "react";
interface IListGroupItem {
    active?: boolean;
    disabled?: boolean;
    flush?: boolean;
    horizontal?: boolean;
    className?: string;
}
declare const ListGroupItem: FC<IListGroupItem>;
export default ListGroupItem;
