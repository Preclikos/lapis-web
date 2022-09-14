import http from './http-client';
import { FeedItem } from './types/feed-item';
import { User } from './types/user';

class WebApi {
  getFeedItems = (country: number, offset: number) =>
    http
      .get<FeedItem[]>(`/activity/feed?country=${country}&offset=${offset}`)
      .then((res) => res.data);

  getUser = (userId: number) =>
    http.get<User>(`/user/getuserbyid?id=${userId}`).then((res) => res.data);
}

export default new WebApi();
