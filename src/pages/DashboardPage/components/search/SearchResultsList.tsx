import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../../components/common/loadingSpinners/LoadingSpinner';
import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';
import SearchResultsSingleItem from './SearchResultsSingleItem';

interface SearchResultsListProps {
  results: ISearchResult[];
  onSelectResult: (result: ISearchResult) => void;
  isLoading: boolean;
}

const SearchResultsList = ({ results, onSelectResult, isLoading }: SearchResultsListProps) => {
  const { t } = useTranslation();

  return (
    <div className="absolute bg-white w-full border border-borderPrimary rounded-2xl top-full mt-2 overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center py-2">
          <LoadingSpinner />
        </div>
      ) : (
        <ul>
          {!!results.length &&
            results.map((result, index) => (
              <SearchResultsSingleItem key={result.id} result={result} onSelect={onSelectResult} index={index} />
            ))}
          {!results.length && (
            <div>
              <p className="px-4 py-4 text-sm">{t('dashboard.search.noResults')}</p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResultsList;
