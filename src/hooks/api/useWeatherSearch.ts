import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { defaultLang } from '../../i18n';
import { QueryKeys } from '../../static/QueryKeys';
import { api } from '../../static/api';
import { ISearchResult } from '../../types/WeatherTypes/WeatherTypes';
import { useAxiosInstance } from '../axios/useAxiosInstance';

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
  const { axiosInstance } = useAxiosInstance();

  const { i18n } = useTranslation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.WEATHER_SEARCH, searchQuery],
    queryFn: () => axiosInstance.get(api.endpoints.search({ searchQuery, lang: i18n.resolvedLanguage ?? defaultLang })),
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
