import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const CardHeader: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
    return (
        <div className={clsx("card-header relative px-3.8 py-3", className)}>
            {children}
        </div>
    );
};

export default CardHeader;
