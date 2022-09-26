import { Image } from './image';

export type User = {
  id: number;
  name: string;
  country: string;
  motto: string;
  image: Image;
};
