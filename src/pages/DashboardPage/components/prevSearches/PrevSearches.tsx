import { useTranslation } from 'react-i18next';
import SecondaryButton from '../../../../components/common/buttons/SecondaryButton';
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
      <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
        {prevSearches.map(search => {
          return (
            <SecondaryButton key={search.id} onClick={() => onSelect(search)} className="w-full">
              {`${search.name}, ${search.country}`}
            </SecondaryButton>
          );
        })}
      </div>
    </div>
  );
};

export default PrevSearches;
