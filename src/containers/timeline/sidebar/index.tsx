import { FC } from 'react';
import clsx from 'clsx';
import SideMapCard from '../../../components/side-map-card';

interface IProps {
  sidebarOpen?: boolean;
}

const Sidebar: FC<IProps> = ({ sidebarOpen }) => {
  return (
    <div
      className={clsx(
        'maxLg:absolute maxLg:w-72 maxLg:top-0 transition-transform',
        !sidebarOpen && 'maxLg:opacity-0 maxLg:invisible maxLg:-translate-x-72',
        sidebarOpen && 'maxLg:opacity-1 maxLg:visible maxLg:translate-x-0'
      )}
    >
      <SideMapCard />
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
