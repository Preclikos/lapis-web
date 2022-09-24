import { FC, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { FormattedDate } from 'react-intl';
import { LapisActivityItem } from '../../api/types/lapisActivity';
import { useApiLapisActivityById } from '../../api/use-api';
import Card from '../ui/card/card';
import SpinnerPuzzle from '../ui/spinner/spinner-puzzle';
import Timeline from '../ui/timeline/timeline';
import TimelineBody from '../ui/timeline/timeline-body';
import TimelineItem from '../ui/timeline/timeline-item';
import TimelinePost from '../ui/timeline/timeline-post';
import TimelineTime from '../ui/timeline/timeline-time';

interface IProps {
  id: number;
}

const convertToLocalTime = (timeStamp: number) => new Date(timeStamp * 1000);

const LapisTimeline: FC<IProps> = ({ id }) => {
  const {
    data: lapisActivity,
    size,
    setSize,
    isValidating,
  } = useApiLapisActivityById(id);

  const hasMore =
    lapisActivity &&
    lapisActivity[lapisActivity.length - 1].activityItems.length ===
      lapisActivity[lapisActivity.length - 1].responseLimit;

  const allItems = lapisActivity
    ? ([] as LapisActivityItem[]).concat(
        ...lapisActivity.map((i) => i.activityItems)
      )
    : [];

  return (
    <Card className="p-4 mt-8 sm:p-[30px]">
      <InfiniteScroll
        loadMore={() => {
          setSize(size + 1);
        }}
        hasMore={hasMore && !isValidating}
        loader={<SpinnerPuzzle key={0} />}
      >
        <Timeline key={'timeline'}>
          {allItems &&
            allItems.map((item) => (
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
                      type={item.type}
                      path={''}
                      userId={item.userId}
                      excerpt={item.description}
                      images={item.images}
                    />
                  </TimelineBody>
                </TimelineItem>
              </Fragment>
            ))}
        </Timeline>
      </InfiniteScroll>
    </Card>
  );
};

export default LapisTimeline;
