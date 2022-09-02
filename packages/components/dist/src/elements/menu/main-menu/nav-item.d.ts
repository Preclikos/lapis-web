import { FC } from "react";
interface IProps {
    /**
     * Pass true if the item has children
     */
    hasChildren?: boolean;
    /**
     * Pass true if the item children is mega menu
     */
    isMegaMenu?: boolean;
}
declare const NavItem: FC<IProps>;
export default NavItem;
