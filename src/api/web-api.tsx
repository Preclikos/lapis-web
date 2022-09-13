import http from './http-client';

class WebApi {
  getFeedItems(country: number, offset: number) {
    return http.get<[]>(`/activity/feed?country=${country}&offset=${offset}`);
  }
}

export default new WebApi();
