import LoadingSpinner from '../../../../components/loadingSpinners/LoadingSpinner';
import { ICurrentWeather } from '../../../../types/WeatherTypes/WeatherTypes';
import CurrentWeather from './components/CurrentWeatherView';

interface CurrentWeatherContainerProps {
  currentWeather: ICurrentWeather | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const CurrentWeatherContainer = ({
  currentWeather,
  isLoading,
  isError,
  errorMessage,
}: CurrentWeatherContainerProps) => {
  if (isError) {
    return <div className="flex justify-center items-center h-36">{errorMessage}</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-36">
        <LoadingSpinner />
      </div>
    );
  }

  return !!currentWeather && <CurrentWeather currentWeather={currentWeather} />;
};

export default CurrentWeatherContainer;
