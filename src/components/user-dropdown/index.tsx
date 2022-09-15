import clsx from 'clsx';
import Dropdown from '../dropdown/dropdown';
import DropdownMenu from '../dropdown/dropdown-menu';
import DropdownToggle from '../dropdown/dropdown-toggle';
import DropdownItem from '../dropdown/dropdown-item';
import { useKeycloak } from '@react-keycloak/web';
import { KeycloakTokenParsed } from 'keycloak-js';
import { FormattedMessage } from 'react-intl';
import { messages } from './messages';
import empty_user from './empty_user.png';
import { useApiUserBySub } from '../../api/use-api';

interface ParsedToken extends KeycloakTokenParsed {
  name: string;
}

const UserDropdown = () => {
  const iconClass = 'text-xl mr-2 text-primary w-[1.125rem] text-center';
  const { keycloak } = useKeycloak();
  const { data: user } = useApiUserBySub(keycloak.subject);

  return (
    <Dropdown direction="down" className="ml-[0.938rem]" shape>
      <DropdownToggle
        variant="texted"
        color="light"
        iconClass="hidden md:inline-block"
        className="inline-flex items-center"
      >
        <img
          src={user?.image.src ?? empty_user}
          alt="user"
          className="w-[2.813rem] h-[2.813rem] rounded-full p-[3px] border border-primary"
          width={37}
          height={37}
        />
        <span className="pl-2.5 hidden md:inline-block">{user?.name}</span>
      </DropdownToggle>
      <DropdownMenu
        className={clsx(
          'p-[0.625rem] w-[12.5rem] mt-3 -mr-[0.938rem] border-t-0 maxSm:right-4 sm:right-0 left-auto rounded-none'
        )}
      >
        <DropdownItem path={`/profile/${user?.id}`}>
          <i className={clsx('icon ion-person', iconClass)} />
          <FormattedMessage {...messages.profile} />
        </DropdownItem>
        <DropdownItem path="/signout">
          <i className={clsx('icon ion-forward', iconClass)} />
          <FormattedMessage {...messages.logout} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
