import { CHART_MAX_SCALE, CHART_MIN_SCALE } from '../static/currentWeatherChartStatic';

export const scaleToRange = (value: number, range: { min: number; max: number }) => {
  const scaledValue = ((value - range.min) / (range.max - range.min)) * (CHART_MAX_SCALE - CHART_MIN_SCALE);
  return Math.max(CHART_MIN_SCALE, Math.min(CHART_MAX_SCALE, scaledValue));
};
