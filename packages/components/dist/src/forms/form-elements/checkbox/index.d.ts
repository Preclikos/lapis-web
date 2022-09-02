/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    checked?: boolean;
    defaultChecked?: boolean;
    label: string;
    color?: "primary" | "success" | "indigo";
}
declare const Checkbox: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLInputElement>>;
export default Checkbox;
