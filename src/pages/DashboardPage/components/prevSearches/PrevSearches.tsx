import { useTranslation } from 'react-i18next';
import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';

interface PrevSearchesProps {
  prevSearches: ISearchResult[];
  onSelect: (result: ISearchResult) => void;
}

const PrevSearches = ({ prevSearches, onSelect }: PrevSearchesProps) => {
  const { t } = useTranslation();

  return (
    <div className="mt-6">
      <h6 className="text-sm text-textTertiary">{t('dashboard.prevSearches.title')}</h6>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {prevSearches.map(search => {
          return (
            <button
              key={search.id}
              onClick={() => onSelect(search)}
              className="border border-borderPrimary px-4 py-2 rounded-md"
            >
              {search.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PrevSearches;
