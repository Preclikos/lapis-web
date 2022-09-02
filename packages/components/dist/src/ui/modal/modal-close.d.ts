import { FC } from "react";
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}
interface IClose extends IProps {
    onClose?: () => void;
}
declare const ModalClose: FC<IClose>;
export default ModalClose;
