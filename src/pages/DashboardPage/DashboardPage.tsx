import { useState } from 'react';
import { useCurrentWeather } from '../../hooks/api/useCurrentWeather';
import { LocalStorageValues } from '../../types/LocalStorageValues';
import { ISearchResult } from '../../types/WeatherTypes/WeatherTypes';
import PrevSearches from './components/prevSearches/PrevSearches';
import Search from './components/search/Search';
import { usePrevSelectedPlaces } from './hooks/usePrevSelectedPlaces';

const getInitialSelectedPlace = () => {
  const storageLastPlaces = localStorage.getItem(LocalStorageValues.weatherAppSearches);
  const lastPlaces = !!storageLastPlaces ? JSON.parse(storageLastPlaces) : [];
  const lastPlace = !!lastPlaces.length ? lastPlaces[0] : null;

  return lastPlace;
};

const DashboardPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<ISearchResult | null>(getInitialSelectedPlace());

  const { prevSelectedPlaces, setPrevSelectedPlaces } = usePrevSelectedPlaces();

  const { currentWeather, isLoading, isError, errorMessage } = useCurrentWeather({
    placeId: selectedPlace?.id as number,
    enabled: !!selectedPlace?.id,
  });

  const handleChangeSelectedPlace = (place: ISearchResult) => {
    setSelectedPlace(place);

    setPrevSelectedPlaces(prevPlaces => {
      const isNew = !prevPlaces.some(prevPlace => prevPlace.id === place.id);

      if (isNew) {
        const newPlaces = [place, ...prevPlaces].slice(0, 4);
        return newPlaces;
      } else {
        return prevPlaces;
      }
    });
  };

  return (
    <div className=" p-4">
      <Search onSelectPlace={handleChangeSelectedPlace} />
      {!!prevSelectedPlaces.length && (
        <PrevSearches prevSearches={prevSelectedPlaces} onSelect={handleChangeSelectedPlace} />
      )}
    </div>
  );
};

export default DashboardPage;
