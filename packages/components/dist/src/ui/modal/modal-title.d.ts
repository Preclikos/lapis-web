import { FC } from "react";
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     * HTML heading tag, default is `h3`. Can be set to `h1`, `h2`, `h4`, `h5`, `h6`
     * @default h3
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
declare const ModalTitle: FC<IProps>;
export default ModalTitle;
