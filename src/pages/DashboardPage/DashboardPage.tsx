import { useState } from 'react';
import { useCurrentWeather } from '../../hooks/api/useCurrentWeather';
import Search from '../../pages/DashboardPage/components/Search';
import { ISearchResult } from '../../types/WeatherTypes/WeatherTypes';

const DashboardPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<ISearchResult | null>(null);

  const { currentWeather } = useCurrentWeather({ placeId: selectedPlace?.id as number, enabled: !!selectedPlace?.id });

  const handleChangeSelectedPlace = (place: ISearchResult) => {
    setSelectedPlace(place);
  };

  return (
    <div className=" p-4">
      <Search onSelectPlace={handleChangeSelectedPlace} />

      {!!currentWeather && <div>{currentWeather.location.name}</div>}
    </div>
  );
};

export default DashboardPage;
