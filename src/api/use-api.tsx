import useSWR from 'swr';
import { Feed } from './types/feed';
import { User } from './types/user';
import webApi from './web-api';

const userFetcher = (id: number) => webApi.getUser(id);

export const useApiUser = (userId: number) =>
  useSWR<User>([userId], userFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 30000,
  });

const feedFetcher = (country: number, offset: number) =>
  webApi.getFeedItems(country, offset);

export const useApiFeed = (country: number, offset: number) =>
  useSWR<Feed>([country, offset], feedFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });
