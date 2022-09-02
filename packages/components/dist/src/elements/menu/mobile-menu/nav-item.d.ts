import { FC, MouseEvent } from "react";
interface IProps {
    className?: string;
    isInSubmenu?: boolean;
    onClick?: (e: MouseEvent) => void;
}
declare const NavItem: FC<IProps>;
export default NavItem;
