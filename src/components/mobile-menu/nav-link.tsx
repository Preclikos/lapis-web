import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import Anchor from "../ui/anchor";

interface IProps {
    path: string;
    className?: string;
    isInSubmenu?: boolean;
}

const NavLink: FC<PropsWithChildren<IProps>> = ({ path, className, isInSubmenu, children }) => {
    return (
        <Anchor
            path={path}
            className={clsx(
                "block text-heading hover:text-primary z-50",
                className,
                !isInSubmenu && "text-lg  font-medium",
                isInSubmenu && "text-base"
            )}
        >
            {children}
        </Anchor>
    );
};

export default NavLink;
