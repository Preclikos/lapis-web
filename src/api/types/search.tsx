export type SearchItem = {
  id: number;
  name: string;
  code: number;
  image: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};
