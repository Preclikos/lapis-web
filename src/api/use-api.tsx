import useSWR from 'swr';
import { Feed } from './types/feed';
import { Lapis } from './types/lapis';
import { LapisActivity } from './types/lapisActivity';
import { User } from './types/user';
import webApi from './web-api';

const userByIdFetcher = (_name: string, id: number) => webApi.getUserById(id);

export const useApiUserById = (id: number | null) =>
  useSWR<User>(id !== null ? ['useApiUserById', id] : null, userByIdFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 30000,
  });

const userBySubFetcher = (_name: string, sub: string) =>
  webApi.getUserBySub(sub);

export const useApiUserBySub = (sub?: string) =>
  useSWR<User>(['useApiUserBySub', sub], userBySubFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 120000,
  });

export const useApiUserByIdOrSub = (subOrId: string | number | null) =>
  useSWR<User>(
    subOrId != null ? ['useApiUserByIdOrSub', subOrId] : null,
    subOrId != null && !isNaN(+subOrId) ? userByIdFetcher : userBySubFetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 120000,
    }
  );

const feedFetcher = (_name: string, country: number, offset: number) =>
  webApi.getFeedItems(country, offset);

export const useApiFeed = (country: number, offset: number) =>
  useSWR<Feed>(['useApiFeed', country, offset], feedFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });

const lapisFetcher = (_name: string, id: number) => webApi.getLapisById(id);

export const useApiLapisById = (id: number | null) =>
  useSWR<Lapis>(id !== null ? ['useApiLapisById', id] : null, lapisFetcher, {
    revalidateOnFocus: false,
  });

const lapisActivityFetcher = (_name: string, lapisId: number, offset: number) =>
  webApi.getLapisActivityById(lapisId, offset);

export const useApiLapisActivityById = (lapisId: number, offset: number) =>
  useSWR<LapisActivity>(
    ['useApiLapisActivityById', lapisId, offset],
    lapisActivityFetcher,
    {
      revalidateOnFocus: false,
    }
  );
