import { ActivityType } from './activityType';
import { Image } from './image';

export type LapisActivity = {
  responseLimit: number;
  activityItems: LapisActivityItem[];
};

export type LapisActivityItem = {
  id: number;
  type: ActivityType;
  lapisId: number;
  description: string;
  timeStamp: number;
  userId: number;
  images: Image[];
  location: LapisActivityLocation;
};

export type LapisActivityLocation = {
  lat: number;
  long: number;
  countryCode: string;
  city: string;
};
