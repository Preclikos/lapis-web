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
declare const ModalClose: FC<PropsWithChildren<IClose>>;
export default ModalClose;
