import PostCard from '../../../components/post-card';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../../../hooks/use-breakpoint';
import { useApiFeed } from '../../../api/use-api';
import { FeedItem } from '../../../api/types/feed';
import InfiniteScroll from 'react-infinite-scroller';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';

const Mansory = () => {
  const [content, setContent] = useState<FeedItem[][]>([[], [], []]);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const resolution = useBreakpoint();

  const { data: feedData, isValidating, size, setSize } = useApiFeed(0);

  const addToRefs = (index: number, element: HTMLDivElement | null) => {
    if (element !== null) {
      itemsRef.current[index] = element;
    }
  };

  const hasMore =
    feedData &&
    feedData[feedData.length - 1].feedItems.length ===
      feedData[feedData.length - 1].responseLimit;

  useEffect(() => {
    switch (resolution) {
      case 'sm':
        setContent([[]]);
        break;
      case 'md':
        setContent([[], []]);
        break;
      case 'lg':
      case 'xl':
        setContent([[], [], []]);
        break;
    }
  }, [resolution]);

  const allItems = feedData
    ? ([] as FeedItem[]).concat(...feedData.map((i) => i.feedItems))
    : [];

  const smallestColumnIndex = () => {
    let minimalIndex = 0;
    let minimalHeight = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < content.length; i++) {
      const height =
        itemsRef.current[i] !== undefined
          ? itemsRef.current[i].clientHeight
          : 0;
      if (height < minimalHeight) {
        minimalHeight = height;
        minimalIndex = i;
      }
    }
    return minimalIndex;
  };

  useLayoutEffect(() => {
    const displayedCount = content.reduce((s, c) => s + c.length, 0);
    if (displayedCount < allItems.length) {
      const tempContent = [...content];
      tempContent[smallestColumnIndex()].push(allItems[displayedCount]);

      setContent(tempContent);
    }
  }, [content, feedData]);

  return (
    <InfiniteScroll
      loadMore={() => {
        setSize(size + 1);
      }}
      hasMore={hasMore && !isValidating}
      loader={<SpinnerPuzzle key={-1} />}
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
