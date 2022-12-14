import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { menuMessages } from '../../messages/menu-messages';
import { IMegamenu } from '../../types/menu';
import NavItem from './nav-item';
import NavLink from './nav-link';

interface IProps {
  className?: string;
  menu: IMegamenu[];
}

const Megamenu: FC<IProps> = ({ menu }) => (
  <ul className="submenu mt-2.5 pl-2.5">
    {menu.map((nav) => (
      <NavItem key={nav.id} isInSubmenu>
        <h3 className="text-base opacity-70">{nav.title}</h3>
        {nav?.submenu && (
          <ul>
            {nav?.submenu?.map((sub) => (
              <li className="mb-1 last:mb-0" key={sub.id}>
                <NavLink path={sub.url} isInSubmenu>
                  <FormattedMessage {...menuMessages[sub.label]} />
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </NavItem>
    ))}
  </ul>
);

export default Megamenu;
