import { FC } from "react";
interface IProps {
    /**
     * Menu Label
     */
    label: string;
    /**
     * Menu Link
     */
    path: string;
    /**
     * Pass true if the item children is mega menu
     */
    isMegaMenu?: boolean;
}
declare const SubLink: FC<IProps>;
export default SubLink;
