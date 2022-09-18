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
    author: {
      name: string;
      path: string;
      location?: string;
    };
    excerpt: string;
    images?: Array<{
      src: string;
      alt?: string;
    }>;
  }>;
}

const posts: IPost = {
  today: [
    {
      id: 1,
      title: 'Building a Simple User Interface',
      path: '/profile',
      time: '10:30pm',
      author: {
        name: 'Elisse Joson',
        path: '/profile',
        location: 'San Francisco, CA',
      },
      excerpt:
        'In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the',
    },
    {
      id: 2,
      title: 'Blueberry Cheesecake Dessert Recipe',
      path: '/profile',
      time: '8:15pm',
      author: {
        name: 'Katherine Lumaad',
        path: '/profile',
        location: 'Oakland, CA',
      },
      excerpt:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
    },
    {
      id: 3,
      title: "Your Finances Don't Have to Be Perfect to Work",
      path: '/profile',
      time: '3:30pm',
      author: {
        name: 'Elisse Joson',
        path: '/profile',
        location: 'San Francisco, CA',
      },
      excerpt:
        'n this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the',
    },
  ],
  yesterday: [
    {
      id: 1,
      title:
        'An Engineer Explains Why You Should Always Order the Larger Pizza',
      path: '/profile',
      time: '6:30pm',
      author: {
        name: 'Elisse Joson',
        path: '/profile',
        location: 'San Francisco, CA',
      },
      excerpt:
        'In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the',
    },
    {
      id: 2,
      title: 'The Strange Persistence of First Languages',
      path: '/profile',
      time: '1:15pm',
      author: {
        name: 'Elisse Joson',
        path: '/profile',
        location: 'San Francisco, CA',
      },
      excerpt:
        'In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the',
    },
  ],
  '12/20/2020': [
    {
      id: 1,
      title: 'How to Win Your Next Political Argument',
      path: '/profile',
      time: '11:45pm',
      author: {
        name: 'Elisse Joson',
        path: '/profile',
        location: 'San Francisco, CA',
      },
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
      <Card className="p-4 sm:p-[30px]">
        <Timeline>
          {Object.entries(posts).map(([key, post]) => (
            <Fragment key={key}>
              <TimelineItem key={key} isDay>
                <TimelineTime>&nbsp;</TimelineTime>
                <TimelineBody>
                  <TimelineDate>Today</TimelineDate>
                </TimelineBody>
              </TimelineItem>
              {post.map((item) => (
                <TimelineItem key={item.id}>
                  <TimelineTime>{item.time}</TimelineTime>
                  <TimelineBody>
                    <Post
                      title={item.title}
                      path={item.path}
                      author={item.author}
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
