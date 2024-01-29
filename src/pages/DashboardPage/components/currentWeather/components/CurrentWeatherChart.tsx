import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { ICurrentWeather } from '../../../../../types/WeatherTypes/WeatherTypes';
import { CHART_MAX_SCALE, CHART_MIN_SCALE, currentWeatherRange } from '../../../static/currentWeatherChartStatic';
import { generateChartBackground } from '../../../utils/generateChartBackground';
import { scaleToRange } from '../../../utils/scaleToRange';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface CurrentWeatherChartProps {
  currentWeather: ICurrentWeather;
}

const CurrentWeatherChart = ({ currentWeather }: CurrentWeatherChartProps) => {
  const { t } = useTranslation();

  const temperature = currentWeather.current.tempC;
  const humidity = currentWeather.current.humidity;
  const windSpeed = currentWeather.current.windKph;

  const scaledTemperature = scaleToRange(temperature, currentWeatherRange.temperatureRange);
  const scaledHumidity = scaleToRange(humidity, currentWeatherRange.humidityRange);
  const scaledWindSpeed = scaleToRange(windSpeed, currentWeatherRange.windSpeedRange);

  const weatherLabelsWithValues = [
    {
      label: t('dashboard.currentWeather.chart.temperature'),
      value: temperature,
      unit: '°C',
    },
    {
      label: t('dashboard.currentWeather.chart.humidity'),
      value: humidity,
      unit: '%',
    },
    {
      label: t('dashboard.currentWeather.chart.windSpeed'),
      value: windSpeed,
      unit: 'km/h',
    },
  ];

  return (
    <Radar
      data={{
        labels: weatherLabelsWithValues.map(item => item.label),
        datasets: [
          {
            data: [scaledTemperature, scaledHumidity, scaledWindSpeed],
            backgroundColor: 'rgba(0, 21, 207, 0.71)',
          },
          ...generateChartBackground(),
        ],
      }}
      options={{
        animation: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            pointStyle: false,
          },
        },

        scales: {
          r: {
            min: CHART_MIN_SCALE,
            max: CHART_MAX_SCALE,
            grid: {
              drawTicks: false,
              drawOnChartArea: false,
            },
            pointLabels: {
              callback: (label, index) => {
                const value = weatherLabelsWithValues[index]?.value;
                const unit = weatherLabelsWithValues[index]?.unit;

                const displayLabel = `${label}: ${value} ${unit}`;

                return displayLabel;
              },
            },
            ticks: {
              display: false,
              stepSize: 1,
            },
          },
        },
      }}
    />
  );
};

export default CurrentWeatherChart;
