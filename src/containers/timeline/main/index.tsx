import { FC, Fragment } from 'react';
import clsx from 'clsx';
import Card from '../../../components/ui/card/card';
import Timeline from '../../../components/ui/timeline/timeline';
import TimelineItem from '../../../components/ui/timeline/timeline-item';
import TimelineTime from '../../../components/ui/timeline/timeline-time';
import TimelineDate from '../../../components/ui/timeline/timeline-date';
import TimelineBody from '../../../components/ui/timeline/timeline-body';
import LapisCard from '../../../components/lapis-card';
import TimelinePost from '../../../components/ui/timeline/timeline-post';
import { FormattedDate } from 'react-intl';
import { useApiLapisById } from '../../../api/use-api';
import { useParams } from 'react-router-dom';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';

interface IPost {
  id: string | number;
  title: string;
  path: string;
  timeStamp: number;
  userId: number /*{
      name: string;
      path: string;
      location?: string;
    };*/;
  excerpt: string;
  images?: Array<{
    src: string;
    alt?: string;
  }>;
}

const posts: IPost[] = [
  {
    id: 1,
    title: 'Nahlasen nedaleko kurima',
    path: '/profile',
    timeStamp: 1663511063,
    userId: 1,
    excerpt: 'Nasli jsme pri prochazce kolem kurima, u studanky.',
    images: [
      {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305305762_5427427467355173_7747652545362861810_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=JtIAxIpxzl4AX-BDnlL&_nc_ht=scontent-prg1-1.xx&oh=00_AT9oAnnMRV_kJ_31bVRpDpxNYIdwzDe0gCQTErKDpwDbDA&oe=632B7B6D',
      },
    ],
  },
  {
    id: 2,
    title: 'Nahlasen nedaleko popuvek',
    path: '/profile',
    timeStamp: 1663211063,
    userId: 2,
    excerpt: 'Nasli jsme pri prochazce kolem popuvek, u studanky.',
    images: [
      {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305305762_5427427467355173_7747652545362861810_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=JtIAxIpxzl4AX-BDnlL&_nc_ht=scontent-prg1-1.xx&oh=00_AT9oAnnMRV_kJ_31bVRpDpxNYIdwzDe0gCQTErKDpwDbDA&oe=632B7B6D',
      },
    ],
  },
];

interface ILapisProps {
  id: string;
}

interface IProps {
  sidebarOpen?: boolean;
}

const convertToLocalTime = (timeStamp: number) => new Date(timeStamp * 1000);

const Main: FC<IProps> = ({ sidebarOpen }) => {
  const { id } = useParams<ILapisProps>();
  const { data: lapis } = useApiLapisById(id !== undefined ? Number(id) : null);

  return (
    <div
      className={clsx(
        'transition-transform',
        sidebarOpen && 'maxLg:translate-x-[305px]'
      )}
    >
      {lapis && <LapisCard code={''} {...lapis} />}
      <Card className="p-4 mt-8 sm:p-[30px]">
        <Timeline>
          {posts.map((item) => (
            <Fragment key={item.id}>
              <TimelineItem key={item.id}>
                <TimelineTime>
                  <FormattedDate
                    value={convertToLocalTime(item.timeStamp)}
                    day="2-digit"
                    month="2-digit"
                  />
                </TimelineTime>
                <TimelineBody>
                  <TimelinePost
                    title={item.title}
                    path={item.path}
                    userId={item.userId}
                    excerpt={item.excerpt}
                    images={item?.images}
                  />
                </TimelineBody>
              </TimelineItem>
            </Fragment>
          ))}
        </Timeline>
      </Card>
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
