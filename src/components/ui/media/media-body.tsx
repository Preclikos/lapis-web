import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}
const MediaBody: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
    return (
        <div className={clsx("media-body flex-1", className)}>{children}</div>
    );
};

export default MediaBody;
