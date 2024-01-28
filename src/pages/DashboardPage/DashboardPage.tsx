import { useState } from 'react';
import { useCurrentWeather } from '../../hooks/api/useCurrentWeather';
import { ISearchResult } from '../../types/WeatherTypes/WeatherTypes';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';

const DashboardPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<ISearchResult | null>(null);

  const { currentWeather } = useCurrentWeather({ placeId: selectedPlace?.id as number, enabled: !!selectedPlace?.id });

  const handleChangeSelectedPlace = (place: ISearchResult) => {
    setSelectedPlace(place);
  };

  return (
    <div className=" p-4">
      <Search onSelectPlace={handleChangeSelectedPlace} />

      {!!currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  );
};

export default DashboardPage;
