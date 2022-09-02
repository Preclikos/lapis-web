import { FC } from "react";
interface IProps {
    className?: string;
    layout?: 1 | 2;
}
declare const Nav: FC<IProps>;
export { default as NavLink } from "./nav-link";
export default Nav;
