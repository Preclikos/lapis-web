import { FC, MouseEvent } from "react";
interface IProps {
    className?: string;
    active?: string;
    onClick: (event: MouseEvent) => void;
    layout?: 1 | 2;
    title?: string;
}
declare const NavLink: FC<IProps>;
export default NavLink;
