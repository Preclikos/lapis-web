import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const Card: FC<PropsWithChildren<IProps>> = ({ children, className = "" }) => {
    return (
        <div
            className={clsx(
                "card relative min-h-min break-words bg-white border border-ghost",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
