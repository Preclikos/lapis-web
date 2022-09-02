/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    label: string;
    color?: "gray" | "primary" | "inverse";
}
declare const FileBrowser: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLInputElement>>;
export default FileBrowser;
