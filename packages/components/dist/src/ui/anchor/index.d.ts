import { FC } from "react";
interface IProps {
    path: string;
    className?: string | undefined;
    rel?: string | undefined;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: (e: React.MouseEvent) => void;
}
declare const Anchor: FC<IProps>;
export default Anchor;
