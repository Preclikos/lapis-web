import { MouseEvent } from "react";
interface IProps {
    className?: string;
    onClick: (e: MouseEvent) => void;
}
declare const ExpandButton: ({ className, onClick }: IProps) => JSX.Element;
export default ExpandButton;
