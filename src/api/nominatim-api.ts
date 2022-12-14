import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_NOMINATIM_URI,
  headers: {
    'Content-type': 'application/json',
    'Accept-Language': 'en-US',
  },
});

let nextRequestPossible = Date.now();

class NominatimOsmApi {
  wait = async (waitMs: number) => {
    return new Promise((resolve) => setTimeout(resolve, waitMs));
  };

  fetchWithWait = async (fetch: Promise<any>) => {
    const currentNextRequest = nextRequestPossible;
    nextRequestPossible = Math.max(nextRequestPossible, Date.now()) + 1000;
    await this.wait(currentNextRequest - Date.now());
    return fetch;
  };

  Reverse = (lat: number, lng: number) =>
    this.fetchWithWait(
      http
        .get(`reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
        .then((res) => res.data)
    );
}

export default new NominatimOsmApi();
