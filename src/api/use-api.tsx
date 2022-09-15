import useSWR from 'swr';
import { Feed } from './types/feed';
import { User } from './types/user';
import webApi from './web-api';

const userByIdFetcher = (id: number) => webApi.getUserById(id);

export const useApiUserById = (id: number) =>
  useSWR<User>([id], userByIdFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 30000,
  });

const userBySubFetcher = (sub: string) => webApi.getUserBySub(sub);

export const useApiUserBySub = (sub?: string) =>
  useSWR<User>([sub], userBySubFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 120000,
  });

export const useApiUserByIdOrSub = (subOrId: string | number | null) =>
  useSWR<User>(
    subOrId != null ? [subOrId] : null,
    subOrId != null && !isNaN(+subOrId) ? userByIdFetcher : userBySubFetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 120000,
    }
  );

const feedFetcher = (country: number, offset: number) =>
  webApi.getFeedItems(country, offset);

export const useApiFeed = (country: number, offset: number) =>
  useSWR<Feed>([country, offset], feedFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });
