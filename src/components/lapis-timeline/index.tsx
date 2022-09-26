import { FC, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { FormattedDate } from 'react-intl';
import { LapisActivityItem } from '../../api/types/lapisActivity';
import { useApiLapisActivityById } from '../../api/use-api';
import Card from '../ui/card/card';
import SpinnerPuzzle from '../ui/spinner/spinner-puzzle';
import Timeline from '../ui/timeline/timeline';
import TimelineBody from '../ui/timeline/timeline-body';
import TimelineDate from '../ui/timeline/timeline-date';
import TimelineItem from '../ui/timeline/timeline-item';
import TimelinePost from '../ui/timeline/timeline-post';
import TimelineTime from '../ui/timeline/timeline-time';

interface IProps {
  id: number;
}

const convertToLocalTime = (timeStamp: number) => new Date(timeStamp * 1000);
const isAnotherYearThenBefore = (current: number, prevous: number) => {
  const currentDate = new Date(current * 1000);
  const prevousDate = new Date(prevous * 1000);
  return currentDate.getFullYear() !== prevousDate.getFullYear();
};

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
            allItems.map((item, index) => (
              <Fragment key={index}>
                {index > 0 &&
                  isAnotherYearThenBefore(
                    item.timeStamp,
                    allItems[index - 1].timeStamp
                  ) && (
                    <TimelineItem isDay>
                      <TimelineTime></TimelineTime>
                      <TimelineBody>
                        <TimelineDate>
                          <FormattedDate
                            value={convertToLocalTime(item.timeStamp)}
                            year="numeric"
                          />
                        </TimelineDate>
                      </TimelineBody>
                    </TimelineItem>
                  )}
                <TimelineItem>
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
                      userId={item.userId}
                      excerpt={item.description}
                      images={item.images}
                      location={item.location}
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
