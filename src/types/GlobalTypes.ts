import { TypeFromConstObject } from './HelperTypes';

export const Langs = {
  EN: 'en',
} as const;

export type Lang = TypeFromConstObject<typeof Langs>;

export interface WeatherApiError {
  error: {
    code: number;
    message: string;
  };
}
