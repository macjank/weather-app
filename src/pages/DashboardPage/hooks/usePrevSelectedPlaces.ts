import { useEffect, useState } from 'react';
import { LocalStorageValues } from '../../../types/LocalStorageValues';
import { ISearchResult } from '../../../types/WeatherTypes/WeatherTypes';

export const usePrevSelectedPlaces = () => {
  const [prevSelectedPlaces, setPrevSelectedPlaces] = useState<ISearchResult[]>([]);

  useEffect(() => {
    const storageLastPlaces = localStorage.getItem(LocalStorageValues.weatherAppSearches);
    const lastPlaces = !!storageLastPlaces ? JSON.parse(storageLastPlaces) : [];

    setPrevSelectedPlaces(lastPlaces);
  }, []);

  useEffect(() => {
    if (!prevSelectedPlaces.length) {
      return;
    }

    localStorage.setItem(LocalStorageValues.weatherAppSearches, JSON.stringify(prevSelectedPlaces));
  }, [prevSelectedPlaces]);

  return {
    prevSelectedPlaces,
    setPrevSelectedPlaces,
  };
};
