import { FC, MouseEvent, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IProps {
  className?: string;
  isInSubmenu?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const NavItem: FC<PropsWithChildren<IProps>> = ({
  className,
  children,
  isInSubmenu,
  onClick,
}) => {
  return (
    <li
      className={clsx(
        'relative border-b border-b-ghost',
        !isInSubmenu && 'mb-3.8 pb-3.8',
        isInSubmenu &&
          'mb-3 pb-3 last:mb-0 last:pb-0 last:border-0 first:border-t first:border-t-ghost first:mt-3 first:pt-3',
        className
      )}
      onClick={onClick}
      onKeyPress={() => {}}
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </li>
  );
};

export default NavItem;
