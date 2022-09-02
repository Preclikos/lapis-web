import { FC } from "react";
interface IProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}
declare const Offcanvas: FC<IProps>;
export { default as OffcanvasHeader } from "./header";
export { default as OffcanvasBody } from "./body";
export default Offcanvas;
