import { FC } from "react";
interface IProps {
    onClick: () => void;
    label: string;
    className?: string;
}
declare const HamburgerButton: FC<IProps>;
export default HamburgerButton;
