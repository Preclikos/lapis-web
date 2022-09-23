import { ActivityType } from './activityType';

export type Feed = {
  responseLimit: number;
  feedItems: FeedItem[];
};

export type FeedItem = {
  id: number;
  type: ActivityType;
  lapisId: number;
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
