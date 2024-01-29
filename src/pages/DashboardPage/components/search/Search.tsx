import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../../components/common/inputs/Input';
import { useWeatherSearch } from '../../../../hooks/api/useWeatherSearch';
import { useDebounce } from '../../../../hooks/useDebounce';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';
import SearchResultsList from './SearchResultsList';

const SEARCH_CONTAINER_ID = 'search-results';

interface SearchProps {
  onSelectPlace: (place: ISearchResult) => void;
}

const Search = ({ onSelectPlace }: SearchProps) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const { debouncedValue: debouncedSearchValue } = useDebounce({ value: searchValue, delay: 400 });

  const { searchResults, isLoading } = useWeatherSearch({ searchQuery: debouncedSearchValue });

  const [isResultListOpen, setIsResultListOpen] = useState(false);

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleResetSearchValue = () => {
    setSearchValue('');
  };

  const handleSelectResult = (result: ISearchResult) => {
    onSelectPlace(result);
    handleResetSearchValue();
    setIsResultListOpen(false);
  };

  useOnClickOutside({ targetId: SEARCH_CONTAINER_ID, onClick: () => setIsResultListOpen(false) });

  return (
    <div id={SEARCH_CONTAINER_ID} className="relative">
      <Input
        placeholder={t('dashboard.search.placeholder')}
        value={searchValue}
        onChange={handleChangeSearchValue}
        onFocus={() => setIsResultListOpen(true)}
      />
      {!!searchValue && (
        <button onClick={handleResetSearchValue} className="absolute right-4 top-1/2 -translate-y-1/2">
          X
        </button>
      )}
      {isResultListOpen && (
        <SearchResultsList results={searchResults} onSelectResult={handleSelectResult} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Search;
