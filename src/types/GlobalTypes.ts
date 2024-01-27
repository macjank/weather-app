import { TypeFromConstObject } from './HelperTypes';

export const Langs = {
  PL: 'pl',
} as const;

export type Lang = TypeFromConstObject<typeof Langs>;
