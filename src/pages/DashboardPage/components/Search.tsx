import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../components/inputs/Input';
import { useWeatherSearch } from '../../../hooks/api/useWeatherSearch';
import { useDebounce } from '../../../hooks/useDebounce';
import { ISearchResult } from '../../../types/WeatherTypes/WeatherTypes';

interface SearchProps {
  onSelectPlace: (place: ISearchResult) => void;
}

const Search = ({ onSelectPlace }: SearchProps) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const { debouncedValue: debouncedSearchValue } = useDebounce({ value: searchValue, delay: 400 });

  const { searchResults } = useWeatherSearch({ searchQuery: debouncedSearchValue });

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOptionClick = (result: ISearchResult) => {
    onSelectPlace(result);
  };

  return (
    <div className="relative">
      <Input placeholder={t('dashboard.search.placeholder')} value={searchValue} onChange={handleChangeSearchValue} />
      {/* //TODO: move to separate components */}
      {!!searchResults.length && (
        <ul className="absolute bg-white w-full border border-borderPrimary rounded-md top-full mt-2">
          {searchResults.map((result, index) => {
            const isFirst = index === 0;

            return (
              <li
                key={result.id}
                onClick={() => handleOptionClick(result)}
                className={`px-4 py-4 text-sm ${!isFirst && 'border-t border-t-borderPrimary'}`}
              >
                {result.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
