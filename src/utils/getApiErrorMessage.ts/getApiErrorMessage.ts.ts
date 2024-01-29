import { AxiosError } from 'axios';
import { WeatherApiError } from '../../types/GlobalTypes';

export const getApiErrorMessage = (error: AxiosError): string | null => {
  const errData = error.response?.data;

  if (!errData) {
    return null;
  }

  const weatherApiError = errData as WeatherApiError;

  const message = weatherApiError.error.message;

  return message;
};
