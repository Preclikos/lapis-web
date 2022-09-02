import { FC } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";
interface IProps {
    bottom?: string;
    className?: string;
    initialView?: "top" | "bottom";
    isPositionChange?: boolean;
}
declare const ScrollBar: FC<IProps>;
export default ScrollBar;
