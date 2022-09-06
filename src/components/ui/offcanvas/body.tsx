import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const OffcanvasBody: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "offcanvas-body overflow-hidden mt-5 mx-[1.875rem] mb-28",
                className
            )}
        >
            {children}
        </div>
    );
};

export default OffcanvasBody;
