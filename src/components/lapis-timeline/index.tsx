import { FC, Fragment, useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState<number>(0);
  const [postCounter, setPostCounter] = useState<number>(0);
  const [isLoadingAndHasMore, setIsLoadingAndHasMore] = useState<boolean>(true);
  const [content, setContent] = useState<LapisActivityItem[]>([]);

  const {
    data: lapisActivity,
    error: lapisError,
    isValidating,
  } = useApiLapisActivityById(id, offset);

  useEffect(() => setContent([]), []);

  useEffect(() => {
    const isLoadingSet = (!lapisActivity && !lapisError) || isValidating;
    if (lapisActivity == undefined) {
      setIsLoadingAndHasMore(isLoadingSet);
    } else {
      if (lapisActivity.activityItems.length >= lapisActivity.responseLimit) {
        setIsLoadingAndHasMore(false);
      }
    }
  }, [lapisActivity, lapisError, isValidating]);

  useEffect(() => {
    if (lapisActivity != undefined) {
      lapisActivity.activityItems.forEach((f) => content.push(f));
      setPostCounter(offset + lapisActivity.activityItems.length);
      setContent([...content]);
    }
  }, [lapisActivity]);

  return (
    <Card className="p-4 mt-8 sm:p-[30px]">
      <InfiniteScroll
        loadMore={() => {
          if (!isLoadingAndHasMore) {
            setOffset(postCounter);
          }
        }}
        hasMore={!isLoadingAndHasMore}
        loader={<SpinnerPuzzle />}
      >
        <Timeline>
          {content.map((item) => (
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
                    title={
                      item.type === 'Location' ? 'Nalasena nova poloha' : ''
                    }
                    path={''}
                    userId={item.userId}
                    excerpt={item.description}
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
