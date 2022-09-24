import { FC } from 'react';
import clsx from 'clsx';
import SideMapCard from '../../../components/side-map-card';
import { Lapis } from '../../../api/types/lapis';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';

interface IProps {
  sidebarOpen?: boolean;
  lapis?: Lapis;
}

const Sidebar: FC<IProps> = ({ sidebarOpen, lapis }) => {
  return (
    <div
      className={clsx(
        'maxLg:absolute maxLg:w-72 maxLg:top-0 transition-transform',
        !sidebarOpen && 'maxLg:opacity-0 maxLg:invisible maxLg:-translate-x-72',
        sidebarOpen && 'maxLg:opacity-1 maxLg:visible maxLg:translate-x-0 '
      )}
    >
      {lapis ? <SideMapCard id={lapis.id} /> : <SpinnerPuzzle />}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
