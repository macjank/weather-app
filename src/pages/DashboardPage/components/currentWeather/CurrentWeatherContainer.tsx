import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../../components/common/loadingSpinners/LoadingSpinner';
import { ICurrentWeather } from '../../../../types/WeatherTypes/WeatherTypes';
import CurrentWeatherChart from './components/CurrentWeatherChart';
import CurrentWeatherInfo from './components/CurrentWeatherInfo';

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
  const { t } = useTranslation();

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

  if (!currentWeather) {
    return (
      <div className="mt-6">
        <p className=" text-center">{t('dashboard.currentWeather.noDataMessage')}</p>
      </div>
    );
  }

  return (
    <>
      <CurrentWeatherInfo currentWeather={currentWeather} />
      <CurrentWeatherChart currentWeather={currentWeather} />
    </>
  );
};

export default CurrentWeatherContainer;
