import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { defaultLang } from '../../i18n';
import { QueryKeys } from '../../static/QueryKeys';
import { api } from '../../static/api';
import { ICurrentWeather } from '../../types/WeatherTypes/WeatherTypes';
import { getApiErrorMessage } from '../../utils/getApiErrorMessage.ts/getApiErrorMessage.ts';
import { useAxiosInstance } from '../axios/useAxiosInstance';

interface ApiCurrentWeather {
  location: {
    name: string;
    region: string;
    lat: number;
    lon: number;
    localtime: string;
    country: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    humidity: number;
    feelslike_c: number;
  };
}

export const useCurrentWeather = ({ placeId, enabled }: { placeId: number; enabled: boolean }) => {
  const { t } = useTranslation();
  const { axiosInstance } = useAxiosInstance();

  const { i18n } = useTranslation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.CURRENT_WEATHER, placeId],
    queryFn: () =>
      axiosInstance.get(api.endpoints.currentWeather({ placeId, lang: i18n.resolvedLanguage ?? defaultLang })),
    enabled,
  });

  const apiCurrentWeather: ApiCurrentWeather | undefined = data?.data;

  const iCurrentWeather: ICurrentWeather | undefined = !!apiCurrentWeather
    ? {
        location: {
          name: apiCurrentWeather.location.name,
          region: apiCurrentWeather.location.region,
          coordinates: {
            lat: apiCurrentWeather.location.lat,
            lng: apiCurrentWeather.location.lon,
          },
          localTime: new Date(apiCurrentWeather.location.localtime),
          country: apiCurrentWeather.location.country,
        },
        current: {
          lastUpdated: new Date(apiCurrentWeather.current.last_updated),
          tempC: apiCurrentWeather.current.temp_c,
          condition: {
            text: apiCurrentWeather.current.condition.text,
            iconUrl: apiCurrentWeather.current.condition.icon,
            code: apiCurrentWeather.current.condition.code,
          },
          windKph: apiCurrentWeather.current.wind_kph,
          windDegree: apiCurrentWeather.current.wind_degree,
          windDir: apiCurrentWeather.current.wind_dir,
          humidity: apiCurrentWeather.current.humidity,
          feelslikeC: apiCurrentWeather.current.feelslike_c,
        },
      }
    : undefined;

  const errorMessage = isError ? getApiErrorMessage(error as AxiosError) ?? t('errorMessages.general') : '';

  return { currentWeather: iCurrentWeather, isLoading, isError, errorMessage };
};
