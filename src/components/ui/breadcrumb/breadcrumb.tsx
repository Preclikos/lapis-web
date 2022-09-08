import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IBreadcrumb {
    /**
     * Extra class name
     */
    className?: string;
}

const Breadcrumb: FC<PropsWithChildren<IBreadcrumb>> = ({ children, className, ...restProps }) => {
    return (
        <ol
            className={clsx(
                className,
                "breadcrumb flex flex-wrap list-none rounded"
            )}
            {...restProps}
        >
            {children}
        </ol>
    );
};

export default Breadcrumb;
