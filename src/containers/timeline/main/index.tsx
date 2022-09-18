import { FC, Fragment } from 'react';
import clsx from 'clsx';
import Card from '../../../components/ui/card/card';
import Timeline from '../../../components/ui/timeline/timeline';
import TimelineItem from '../../../components/ui/timeline/timeline-item';
import Post from '../../../components/ui/post';
import TimelineTime from '../../../components/ui/timeline/timeline-time';
import TimelineDate from '../../../components/ui/timeline/timeline-date';
import TimelineBody from '../../../components/ui/timeline/timeline-body';
import LapisCard from '../../../components/lapis-card';

interface IPost {
  [x: string]: Array<{
    id: string | number;
    title: string;
    path: string;
    time: string;
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
  }>;
}

const posts: IPost = {
  '12/20/2020': [
    {
      id: 1,
      title: 'How to Win Your Next Political Argument',
      path: '/profile',
      time: '11:45pm',
      userId: 1,
      excerpt:
        'In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the',
    },
  ],
};

interface IProps {
  sidebarOpen?: boolean;
}

const Main: FC<IProps> = ({ sidebarOpen }) => {
  return (
    <div
      className={clsx(
        'transition-transform',
        sidebarOpen && 'maxLg:translate-x-[305px]'
      )}
    >
      <LapisCard
        name={'Krtecek'}
        description={''}
        userId={1}
        country={''}
        path={''}
        image={{
          src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305305762_5427427467355173_7747652545362861810_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=JtIAxIpxzl4AX-BDnlL&_nc_ht=scontent-prg1-1.xx&oh=00_AT9oAnnMRV_kJ_31bVRpDpxNYIdwzDe0gCQTErKDpwDbDA&oe=632B7B6D',
          alt: 'Krtecek',
        }}
      />
      <Card className="p-4 mt-8 sm:p-[30px]">
        <Timeline>
          {Object.entries(posts).map(([key, post]) => (
            <Fragment key={key}>
              <TimelineItem key={key} isDay>
                <TimelineTime>&nbsp;</TimelineTime>
                <TimelineBody>
                  <TimelineDate>{key}</TimelineDate>
                </TimelineBody>
              </TimelineItem>
              {post.map((item) => (
                <TimelineItem key={item.id}>
                  <TimelineTime>{item.time}</TimelineTime>
                  <TimelineBody>
                    <Post
                      title={item.title}
                      path={item.path}
                      userId={item.userId}
                      excerpt={item.excerpt}
                      images={item?.images}
                    />
                  </TimelineBody>
                </TimelineItem>
              ))}
            </Fragment>
          ))}
        </Timeline>
      </Card>
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
