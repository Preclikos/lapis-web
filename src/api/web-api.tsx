import http from './http-client';
import { Feed } from './types/feed';
import { Lapis } from './types/lapis';
import { LapisActivity } from './types/lapisActivity';
import { LapisLocation } from './types/lapisLocation';
import { LapisOverview } from './types/lapisOverview';
import { User } from './types/user';

class WebApi {
  getFeedItems = (country: number, offset: number) =>
    http
      .get<Feed>(`/activity/feed/${country}/${offset}`)
      .then((res) => res.data);

  getUserById = (userId: number) =>
    http.get<User>(`/user/id/${userId}`).then((res) => res.data);

  getUserBySub = (userSub: string) =>
    http.get<User>(`/user/sub/${userSub}`).then((res) => res.data);

  getLapisById = (lapisId: number) =>
    http.get<Lapis>(`/lapis/id/${lapisId}`).then((res) => res.data);

  getLapisActivityById = (lapisId: number, offset: number) =>
    http
      .get<LapisActivity>(`/lapis/id/${lapisId}/activities/${offset}`)
      .then((res) => res.data);

  getLapisLastLocationById = (lapisId: number) =>
    http
      .get<LapisLocation>(`/lapis/id/${lapisId}/lastLocation`)
      .then((res) => res.data);

  getLapisOverviewById = (lapisId: number) =>
    http
      .get<LapisOverview>(`/lapis/id/${lapisId}/overview`)
      .then((res) => res.data);
}

export default new WebApi();
