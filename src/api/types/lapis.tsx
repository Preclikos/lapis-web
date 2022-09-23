export type Lapis = {
  id: number;
  code: string;
  name: string;
  description: string;
  userId: number;
  image: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};
