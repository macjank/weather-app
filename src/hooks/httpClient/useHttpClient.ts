import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Environment } from '../../Environment';
import { defaultLang } from '../../i18n';
import { api } from '../../static/api';

const WEATHER_API_KEY = Environment.WEATHER_API_KEY;

export const useHttpClient = () => {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage ?? defaultLang;

  const axiosInstance = axios.create({
    baseURL: api.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(config => {
    config.params = {
      ...config.params,
      key: WEATHER_API_KEY,
      lang: resolvedLanguage,
    };
    return config;
  });

  return { httpClient: axiosInstance };
};
