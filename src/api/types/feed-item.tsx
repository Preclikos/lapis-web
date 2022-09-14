export type FeedItem = {
  id: number;
  type: string;
  path: string;
  description: string;
  timeStamp: number;
  userId: number;

  image: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};
