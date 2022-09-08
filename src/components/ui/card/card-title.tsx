import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const CardTitle: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
    return (
        <h6
            className={clsx(
                "uppercase font-bold text-sm tracking-wider",
                className
            )}
        >
            {children}
        </h6>
    );
};

export default CardTitle;
