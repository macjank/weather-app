import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../../components/common/loadingSpinners/LoadingSpinner';
import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';

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
            results.map((result, index) => {
              const isFirst = index === 0;

              const namePart = result.name;
              const regionPart = !!result.region ? `, ${result.region}` : '';
              const countryPart = !!result.country ? `, ${result.country}` : '';

              return (
                <li
                  key={result.id}
                  onClick={() => onSelectResult(result)}
                  className={`px-4 py-4 text-sm cursor-pointer hover:bg-slate-100 ${!isFirst && 'border-t border-t-borderPrimary'}`}
                >
                  <span className=" font-semibold">{namePart}</span>
                  {regionPart}
                  {countryPart}
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
