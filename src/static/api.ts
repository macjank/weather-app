import { Environment } from '../Environment';

const WEATHER_API_KEY = Environment.WEATHER_API_KEY;

export const api = {
  BASE_URL: Environment.BASE_URL,
  endpoints: {
    search: ({ searchQuery, lang }: { searchQuery: string; lang: string }) =>
      `/search.json?key=${WEATHER_API_KEY}&q=${searchQuery}&lang=${lang}`,
    currentWeather: ({ placeId, lang }: { placeId: number; lang: string }) =>
      `/current.json?key=${WEATHER_API_KEY}&q=id:${placeId}&lang=${lang}`,
  },
};
