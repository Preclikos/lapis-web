import axios from 'axios';
import useSWR from 'swr';
import nominatimOsmApi from './nominatim-api';

const reverseFetcher = (name: string, lat: number, lng: number) =>
  nominatimOsmApi.Reverse(lat, lng);

export const useNominatimReverse = (lat: number, lng: number) =>
  useSWR(['useNominatimReverse', lat, lng], reverseFetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });
