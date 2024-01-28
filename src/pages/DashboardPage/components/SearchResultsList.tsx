import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../components/loadingSpinners/LoadingSpinner';
import { ISearchResult } from '../../../types/WeatherTypes/WeatherTypes';

interface SearchResultsListProps {
  results: ISearchResult[];
  onSelectResult: (result: ISearchResult) => void;
  isLoading: boolean;
}

const SearchResultsList = ({ results, onSelectResult, isLoading }: SearchResultsListProps) => {
  const { t } = useTranslation();

  return (
    <div className="absolute bg-white w-full border border-borderPrimary rounded-md top-full mt-2">
      {isLoading ? (
        <div className="flex items-center justify-center py-2">
          <LoadingSpinner />
        </div>
      ) : (
        <ul>
          {!!results.length &&
            results.map((result, index) => {
              const isFirst = index === 0;

              return (
                <li
                  key={result.id}
                  onClick={() => onSelectResult(result)}
                  className={`px-4 py-4 text-sm ${!isFirst && 'border-t border-t-borderPrimary'}`}
                >
                  {result.name}
                </li>
              );
            })}
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
