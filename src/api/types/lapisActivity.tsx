export type LapisActivity = {
  responseLimit: number;
  activityItems: LapisActivityItem[];
};

export type LapisActivityItem = {
  id: number;
  type: string;
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
