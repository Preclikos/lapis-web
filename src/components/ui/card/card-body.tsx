import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const CardBody: FC<PropsWithChildren<IProps>> = ({ children, className }) => {
    return (
        <div className={clsx("card-body flex-auto p-5", className)}>
            {children}
        </div>
    );
};

export default CardBody;
