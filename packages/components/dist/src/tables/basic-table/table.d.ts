import { FC } from "react";
declare type TColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "teal" | "indigo" | "purple" | "pink" | "orange";
interface IProps {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    theadColor?: TColor;
    color?: TColor;
    className?: string;
}
declare const BasicTable: FC<IProps>;
export default BasicTable;
