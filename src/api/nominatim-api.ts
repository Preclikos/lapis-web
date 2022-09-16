import axios from 'axios';

const http = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
  headers: {
    'Content-type': 'application/json',
  },
});

class NominatimOsmApi {
  Reverse = (lat: number, lon: number) =>
    http
      .get(`reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`)
      .then((res) => res.data);
}

export default new NominatimOsmApi();
