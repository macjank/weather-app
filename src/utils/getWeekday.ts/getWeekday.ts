import i18next from 'i18next';

export const getWeekday = (date: Date) => {
  const dayIndex = date.getDay();
  const daysOfWeek: {
    [key: string]: string;
  } = i18next.t('weekdays', { returnObjects: true });

  return daysOfWeek[Object.keys(daysOfWeek)[dayIndex] as string];
};
