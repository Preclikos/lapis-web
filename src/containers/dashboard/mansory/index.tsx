import PostCard from '../../../components/post-card';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../../../hooks/use-breakpoint';
import { useApiFeed } from '../../../api/use-api';
import { FeedItem } from '../../../api/types/feed-item';
import SpinnerCube from '../../../components/ui/spinner/spinner-cube';
import InfiniteScroll from 'react-infinite-scroller';

/*
const data: IProps[] = [
  {
    id: 1,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/131273260_10218550013368020_3840312457061816031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M8yomtEYJlEAX89FqW8&_nc_ht=scontent-prg1-1.xx&oh=00_AT_IYFgf9j7VS0xRxh38j6aRKjmpf0KBGf-6suSWs3bO-w&oe=633FCDB6',
        alt: undefined,
      },
      name: 'Preclikos Husák',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 5. minutama',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306481995_10210504880935976_6210953247463730533_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=4id0-lYifkMAX_OfjJ5&_nc_ht=scontent-prg1-1.xx&oh=00_AT8EUFc9kNuR2cKLIubhBqAkGTbEzIFZRhqp6LYlbohM0w&oe=6324186D',
        alt: undefined,
        width: 720,
        height: 540,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Krasny kaminek, dekujeme posuneme dal.',
    },
  },
  {
    id: 2,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/55865112_2850827104935056_1322842037313077248_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l2sP-W29XnMAX_qKoIB&_nc_ht=scontent-prg1-1.xx&oh=00_AT_OaBLU0aKUF8NLP_D10kG58UwbnKK5IQ338cWnAFsfAw&oe=6341779E',
        alt: undefined,
      },
      name: 'Marie Langrová',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 30. minutama',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306527926_1697836850597305_3571544960524192567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=tLbx3d5tAXoAX91xkjw&_nc_ht=scontent-prg1-1.xx&oh=00_AT9WwBtQ6bZMvlbRgdDwrynRAzctv7AsmlGjL5zbKaxygA&oe=63227E2A',
        alt: undefined,
        width: 1536,
        height: 2048,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Nalezen nedaleko berouna, pan je asi piskac.',
    },
  },
  {
    id: 3,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/125527990_4533821043299139_4309680603481955445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ES0W-qoG1ZoAX8lVm96&_nc_ht=scontent-prg1-1.xx&oh=00_AT-SJwsO3IRE6fXyrg6CuzT8Rpc3wZ-_OoGinVY6YrmODQ&oe=634419DA',
        alt: undefined,
      },
      name: 'Kristýna Kovářová',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 4. hodinama',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306271291_5471494146263184_3477857215802059199_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=FIe3fFQ-9icAX993Cuy&_nc_ht=scontent-prg1-1.xx&oh=00_AT8UnmS2JvsHBV35pJgU11grpzHlREGMElhDwHHV62_4Hg&oe=6321528A',
        alt: undefined,
        width: 721,
        height: 960,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Nasla sem ho po ceste do prace. Zlepsil me den :)',
    },
  },
  {
    id: 4,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/12068408_10205463497652927_7978865435089464222_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4A3qOGu2Hy8AX_8csAD&_nc_oc=AQleGjpxw3_JShWzsVEGTa97YErnwp2fE9HtIiwWeXTHEVj_mC4Z-NneUbMgwTmxYFQ&tn=RkJAGpiN1nTrpekT&_nc_ht=scontent-prg1-1.xx&oh=00_AT-fTdG3I3IN5dKjcgbWppAjvKZ6PaAkSIRc2ojtqSCN8w&oe=63435E2A',
        alt: undefined,
      },
      name: 'Petr Husák',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 6. hodinama',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305834924_10225275473107832_8694465417712094376_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=X4boR5myNTYAX8VqdSy&_nc_ht=scontent-prg1-1.xx&oh=00_AT9GPe4yrwxPzMldjpPKX7vRqss8QNii5dKsXOagJ0-7QQ&oe=63234085',
        alt: undefined,
        width: 720,
        height: 960,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Papousek z hradce',
    },
  },
  {
    id: 5,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/274614062_4960869104001841_2121471793839880380_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6NBtLlfQO_MAX9xazy-&_nc_ht=scontent-prg1-1.xx&oh=00_AT_5IreiV5woKQySjtHEOje41yUhnl_QLXSuRga4nJRCnA&oe=632243EE',
        alt: undefined,
      },
      name: 'Kateřina Duff',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 12. hodinama',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306573285_10222842792918312_460568937552844605_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=xxcx7ahnVSQAX91W7tF&tn=RkJAGpiN1nTrpekT&_nc_ht=scontent-prg1-1.xx&oh=00_AT_Ac7Qrq-3rOznh9dYog6FTd93hNEEIWBVZCoFZwerIBQ&oe=632246ED',
        alt: undefined,
        width: 1536,
        height: 2048,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Krasny kaminek nedaleko Noveho brodu, dekujeme posuneme dal.',
    },
  },
  {
    id: 6,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/615782_2448939119424_1537089930_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VhTPDywOeYYAX93naNp&_nc_ht=scontent-prg1-1.xx&oh=00_AT8yKacUgBmOYezzdJlQtd-JRFPUXPiQIiHPAQQBMhSxZw&oe=634366A8',
        alt: undefined,
      },
      name: 'Hana Husáková',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 1. dnem',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306136009_5606291649428877_5359476429240359169_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=Mp5c2-gjKN4AX9IZZ40&_nc_ht=scontent-prg1-1.xx&oh=00_AT8cqeEJ3d9DDGJ73CiyAHj3bN1C5z2XU9LdInaDc5i2BQ&oe=6322A939',
        alt: undefined,
        width: 1387,
        height: 640,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Kvetinka u mostu.',
    },
  },
  {
    id: 7,
    user: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/615782_2448939119424_1537089930_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VhTPDywOeYYAX93naNp&_nc_ht=scontent-prg1-1.xx&oh=00_AT8yKacUgBmOYezzdJlQtd-JRFPUXPiQIiHPAQQBMhSxZw&oe=634366A8',
        alt: undefined,
      },
      name: 'Hana Husáová',
      path: '/profile/nejakyid',
      designation: 'Czech - Guru',
      lastActivity: 'Pred 1. dnem',
    },
    activity: {
      image: {
        src: 'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/306136009_5606291649428877_5359476429240359169_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=Mp5c2-gjKN4AX9IZZ40&_nc_ht=scontent-prg1-1.xx&oh=00_AT8cqeEJ3d9DDGJ73CiyAHj3bN1C5z2XU9LdInaDc5i2BQ&oe=6322A939',
        alt: undefined,
        width: 1387,
        height: 640,
      },
      type: 'Location',
      path: '/lapis/nejakyid',
      excerpt: 'Kvetinka u mostu.',
    },
  },
];
*/

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
      if (feedData.length >= 8) {
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
        setColumnsCount(3);
        break;
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
      postCounter < feedData.length
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

      content[minimalIndex].push(feedData[postCounter - offset]);

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
      loader={<SpinnerCube />}
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
