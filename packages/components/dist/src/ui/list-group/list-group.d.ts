import { FC } from "react";
interface IListGroup {
    flush?: boolean;
    horizontal?: boolean;
    className?: string;
    as?: React.ElementType;
}
declare const ListGroup: FC<IListGroup>;
export default ListGroup;
