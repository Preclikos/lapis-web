import { Image } from './image';

export type Lapis = {
  id: number;
  code: string;
  name: string;
  description: string;
  timeStamp: number;
  userId: number;
  image: Image;
};
