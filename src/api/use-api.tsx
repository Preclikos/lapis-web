import useSWR from 'swr';
import { FeedItem } from './types/feed-item';
import { User } from './types/user';
import webApi from './web-api';

const userFetcher = (id: number) => webApi.getUser(id);

export const useApiUser = (userId: number) =>
  useSWR<User>([userId], userFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });

const feedFetcher = (country: number, offset: number) =>
  webApi.getFeedItems(country, offset);

export const useApiFeed = (country: number, offset: number) =>
  useSWR<FeedItem[]>([country, offset], feedFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  });
