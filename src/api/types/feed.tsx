import { ActivityType } from './activityType';
import { Image } from './image';

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
  image: Image;
};
