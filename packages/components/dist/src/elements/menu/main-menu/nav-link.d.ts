import { FC } from "react";
interface IProps {
    /**
     * Menu Label
     */
    label: string;
    /**
     * Menu Link
     */
    path: string;
    /**
     * Icon ClassName
     */
    icon?: string;
    /**
     * Pass true if the item has children
     */
    hasChildren?: boolean;
    /**
     * Pass extra classes
     */
    className?: string;
}
declare const NavLink: FC<IProps>;
export default NavLink;
