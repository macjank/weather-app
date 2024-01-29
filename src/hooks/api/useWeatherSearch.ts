import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../static/QueryKeys';
import { api } from '../../static/api';
import { ISearchResult } from '../../types/WeatherTypes/WeatherTypes';
import { useHttpClient } from '../httpClient/useHttpClient';

const QUERY_MIN_LENGTH = 3;

interface ApiSearchResult {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

export const useWeatherSearch = ({ searchQuery }: { searchQuery: string }) => {
  const { httpClient } = useHttpClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.WEATHER_SEARCH, searchQuery],
    queryFn: () => httpClient.get(api.endpoints.search({ searchQuery })),
    enabled: searchQuery.length >= QUERY_MIN_LENGTH,
  });

  const apiResults: ApiSearchResult[] | undefined = data?.data;

  const iResults =
    apiResults?.map(apiResult => {
      const iResult: ISearchResult = {
        country: apiResult.country,
        id: apiResult.id,
        coordinates: {
          lat: apiResult.lat,
          lng: apiResult.lon,
        },
        name: apiResult.name,
        region: apiResult.region,
        url: apiResult.url,
      };

      return iResult;
    }) ?? [];

  return { searchResults: iResults, isLoading, isError, error };
};
