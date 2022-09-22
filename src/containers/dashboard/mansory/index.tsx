import PostCard from '../../../components/post-card';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../../../hooks/use-breakpoint';
import { useApiFeed } from '../../../api/use-api';
import { FeedItem } from '../../../api/types/feed';
import InfiniteScroll from 'react-infinite-scroller';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';

const Mansory = () => {
  const [offset, setOffset] = useState<number>(0);
  const [isLoadingAndHasMore, setIsLoadingAndHasMore] = useState<boolean>(true);
  const [postCounter, setPostCounter] = useState<number>(0);
  const [columnsCount, setColumnsCount] = useState<number>(3);
  const [content, setContent] = useState<[FeedItem[]]>([[]]);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const resolution = useBreakpoint();
  const {
    data: feedData,
    error: feedError,
    isValidating,
  } = useApiFeed(0, offset);

  const addToRefs = (index: number, element: HTMLDivElement | null) => {
    if (element !== null) {
      itemsRef.current[index] = element;
    }
  };

  useEffect(() => {
    const isLoadingSet = (!feedData && !feedError) || isValidating;
    if (feedData == undefined) {
      setIsLoadingAndHasMore(isLoadingSet);
    } else {
      if (feedData.feedItems.length >= feedData.responseLimit) {
        setIsLoadingAndHasMore(false);
      }
    }
  }, [feedData, feedError, isValidating]);

  useEffect(() => {
    switch (resolution) {
      case 'sm':
        setColumnsCount(1);
        break;
      case 'md':
        setColumnsCount(2);
        break;
      case 'lg':
      case 'xl':
        setColumnsCount(3);
        break;
    }
  }, [resolution]);

  useEffect(() => {
    const content: [FeedItem[]] = [[]];
    for (let i = 0; i < columnsCount; i++) {
      content[i] = [];
    }
    setPostCounter(0);
    setContent([...content]);
  }, [columnsCount]);

  useLayoutEffect(() => {
    if (
      feedData != undefined &&
      content.length === columnsCount &&
      postCounter < feedData.feedItems.length
    ) {
      setPostCounter(postCounter + 1);

      let minimalIndex = 0;
      let minimalHeight = Number.MAX_SAFE_INTEGER;

      for (let i = 0; i < columnsCount; i++) {
        const height =
          itemsRef.current[i] !== undefined
            ? itemsRef.current[i].clientHeight
            : 0;
        if (height < minimalHeight) {
          minimalHeight = height;
          minimalIndex = i;
        }
      }

      content[minimalIndex].push(feedData.feedItems[postCounter - offset]);

      setContent([...content]);
    }
  }, [content, feedData]);

  return (
    <InfiniteScroll
      loadMore={() => {
        if (!isLoadingAndHasMore) {
          setOffset(postCounter);
        }
      }}
      hasMore={!isLoadingAndHasMore}
      loader={<SpinnerPuzzle />}
    >
      <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2">
        {content.map((items, index) => {
          return (
            <div key={index}>
              <div ref={(element) => addToRefs(index, element)}>
                {items.map((singleItem) => (
                  <PostCard key={singleItem.id} {...singleItem} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Mansory;
