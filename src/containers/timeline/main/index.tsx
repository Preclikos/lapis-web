import { FC } from 'react';
import clsx from 'clsx';
import LapisCard from '../../../components/lapis-card';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';
import LapisTimeline from '../../../components/lapis-timeline';
import { Lapis } from '../../../api/types/lapis';

interface IProps {
  sidebarOpen?: boolean;
  lapis?: Lapis;
}

const Main: FC<IProps> = ({ sidebarOpen, lapis }) => {
  return (
    <div
      className={clsx(
        'transition-transform',
        sidebarOpen && 'maxLg:translate-x-[305px]'
      )}
    >
      {lapis ? (
        <>
          <LapisCard {...lapis} />
          <LapisTimeline id={lapis.id} />
        </>
      ) : (
        <SpinnerPuzzle />
      )}
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
