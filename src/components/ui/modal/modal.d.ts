import { FC } from "react";
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}
export interface IModal extends IProps {
    /**
     * When `true` The modal will show itself.
     */
    show: boolean;
    /**
     * Modal Sizes
     */
    size?: "xl" | "lg" | "md" | "sm";
    /**
     * vertically center the Dialog in the window
     */
    centered?: boolean;
    /**
     * Callback function for close modal
     */
    onClose: () => void;
}
declare const Modal: FC<PropsWithChildren<IModal>>;
export default Modal;
