import PostCard from '../../../components/post-card';
import { useEffect, useState } from 'react';
import { useBreakpoint } from '../../../hooks/use-breakpoint';
import { useApiFeed } from '../../../api/use-api';
import { FeedItem } from '../../../api/types/feed';
import InfiniteScroll from 'react-infinite-scroller';
import SpinnerPuzzle from '../../../components/ui/spinner/spinner-puzzle';
import Masonry from 'react-masonry-css';

const Mansory = () => {
  const [columns, setcolumns] = useState<number>(3);
  const resolution = useBreakpoint();

  const { data: feedData, isValidating, size, setSize } = useApiFeed(0);

  const hasMore =
    feedData &&
    feedData[feedData.length - 1].feedItems.length ===
      feedData[feedData.length - 1].responseLimit;

  useEffect(() => {
    switch (resolution) {
      case 'sm':
        setcolumns(1);

        break;
      case 'md':
        setcolumns(2);

        break;
      case 'lg':
      case 'xl':
        setcolumns(3);
        break;
    }
  }, [resolution]);

  const allItems = feedData
    ? ([] as FeedItem[]).concat(...feedData.map((i) => i.feedItems))
    : [];

  return (
    <InfiniteScroll
      loadMore={() => {
        setSize(size + 1);
      }}
      hasMore={hasMore && !isValidating}
      loader={<SpinnerPuzzle key={-1} />}
    >
      <Masonry
        breakpointCols={columns}
        className="dashboard-masonry-grid"
        columnClassName="dashboard-masonry-grid_column"
      >
        {allItems.map((singleItem) => (
          <PostCard key={singleItem.id} {...singleItem} />
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Mansory;
