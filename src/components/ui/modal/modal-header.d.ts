import { FC } from "react";
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     * Custom Style
     */
    style?: React.CSSProperties;
}
declare const ModalHeader: FC<PropsWithChildren<IProps>>;
export default ModalHeader;
