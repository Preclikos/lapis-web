import {
  Children,
  FC,
  ReactChild,
  ReactText,
  useState,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { useParams } from 'react-router-dom';
import { useApiLapisById } from '../../../api/use-api';
import HamburgerButton from '../../../components/ui/hamburger-button';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';

type IChild = Exclude<ReactChild, ReactText>;

interface ILapisProps {
  id: string;
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { id } = useParams<ILapisProps>();
  const { data: lapis } = useApiLapisById(id !== undefined ? Number(id) : null);

  const RenderChild = Children.map(children, (el) => {
    const child = el as IChild;
    if (child !== null) {
      const childType = child.type as FunctionComponent;
      const name = childType.displayName || childType.name;
      if (name === 'Sidebar' || name === 'Main') {
        return lapis !== undefined ? (
          <child.type
            {...child.props}
            sidebarOpen={sidebarOpen}
            lapis={lapis}
          />
        ) : (
          <SpinnerPuzzle />
        );
      }
    }
    return null;
  });

  return (
    <>
      <HamburgerButton
        label="Click here to open sidebar"
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="lg:hidden"
      />
      <div className="relative lg:grid lg:grid-cols-[minmax(0,_72%)_minmax(296px,_26%)] lg:gap-5 overflow-hidden">
        {RenderChild}
      </div>
    </>
  );
};

export default Wrapper;
