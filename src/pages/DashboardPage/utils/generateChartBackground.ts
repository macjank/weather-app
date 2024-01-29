import { chartBackgroundColors } from '../static/currentWeatherChartStatic';

export const generateChartBackground = () => {
  return chartBackgroundColors.map((color, index) => ({
    data: [index + 1, index + 1, index + 1],
    backgroundColor: color,
    borderWidth: 1,
  }));
};
