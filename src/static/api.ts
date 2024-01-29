import { Environment } from '../Environment';

export const api = {
  BASE_URL: Environment.BASE_URL,
  endpoints: {
    search: ({ searchQuery }: { searchQuery: string }) => `/search.json?q=${searchQuery}`,
    currentWeather: ({ placeId }: { placeId: number }) => `/current.json?q=id:${placeId}`,
  },
};
