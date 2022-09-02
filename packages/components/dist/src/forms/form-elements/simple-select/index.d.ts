import { ReactNode } from "react";
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    children: Element | Element[] | ReactNode | ReactNode[];
}
declare const Select: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLSelectElement>>;
export default Select;
