import { useTranslation } from 'react-i18next';
import { ICurrentWeather } from '../../../../../types/WeatherTypes/WeatherTypes';
import { getWeekday } from '../../../../../utils/getWeekday.ts/getWeekday';
import CurrentWeatherChart from './CurrentWeatherChart';

interface CurrentWeatherProps {
  currentWeather: ICurrentWeather;
}

const CurrentWeather = ({ currentWeather }: CurrentWeatherProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mx-auto flex flex-col items-center mt-8 gap-6">
        <div>
          <h2 className="text-2xl text-center">{currentWeather.location.name}</h2>
          <h6 className="text-center text-sm text-textTertiary">{currentWeather.location.country}</h6>
        </div>

        <div>
          <h3 className=" text-center text-6xl md:text-8xl">{currentWeather.current.tempC}&deg;C</h3>
          <p className=" text-center text-textTertiary text-xs">{`${t('dashboard.currentWeather.feelsLikeWeather')}: ${currentWeather.current.feelslikeC}°C`}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex justify-center items-center flex-col">
            <img src={currentWeather.current.condition.iconUrl} alt="" />
            <p className="text-xs font-medium text-textTertiary">{currentWeather.current.condition.text}</p>
          </div>

          <div className="border-l border-borderPrimary pl-4 flex flex-col justify-center">
            <p className="text-textTertiary text-base font-bold">{getWeekday(currentWeather.location.localTime)}</p>
            <p className="text-textTertiary text-sm">{currentWeather.location.localTime.toLocaleDateString()}</p>
            <p className="text-textTertiary text-sm">{currentWeather.location.localTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      <CurrentWeatherChart currentWeather={currentWeather} />
    </div>
  );
};

export default CurrentWeather;
