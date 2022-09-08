import { FC, PropsWithChildren } from "react";
import { mergeTailwindClassesAlt } from "../../../methods";

interface IProps {
    className?: string;
}

const CardFooter: FC<PropsWithChildren<IProps>> = ({ className = "", children }) => {
    return (
        <div
            className={mergeTailwindClassesAlt(
                "card-footer relative px-5 py-3 bg-black/5 border-t border-t-ghost",
                className
            )}
        >
            {children}
        </div>
    );
};

export default CardFooter;
