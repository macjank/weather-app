import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../../components/inputs/Input';
import { useWeatherSearch } from '../../../../hooks/api/useWeatherSearch';
import { useDebounce } from '../../../../hooks/useDebounce';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';
import SearchResultsList from './SearchResultsList';

const ID = 'search-results';

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

  const handleSelectResult = (result: ISearchResult) => {
    onSelectPlace(result);
    setIsResultListOpen(false);
  };

  useOnClickOutside({ targetId: ID, onClick: () => setIsResultListOpen(false) });

  return (
    <div id={ID} className="relative">
      <Input
        placeholder={t('dashboard.search.placeholder')}
        value={searchValue}
        onChange={handleChangeSearchValue}
        onClick={() => setIsResultListOpen(true)}
      />
      {isResultListOpen && (
        <SearchResultsList results={searchResults} onSelectResult={handleSelectResult} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Search;
