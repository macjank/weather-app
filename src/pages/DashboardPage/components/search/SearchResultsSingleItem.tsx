import { ISearchResult } from '../../../../types/WeatherTypes/WeatherTypes';

interface SearchResultsSingleItemProps {
  result: ISearchResult;
  onSelect: (result: ISearchResult) => void;
  index: number;
}

const SearchResultsSingleItem = ({ result, onSelect, index }: SearchResultsSingleItemProps) => {
  const isFirst = index === 0;

  const namePart = result.name;
  const regionPart = !!result.region ? `, ${result.region}` : '';
  const countryPart = !!result.country ? `, ${result.country}` : '';

  return (
    <li
      onClick={() => onSelect(result)}
      className={`px-4 py-4 text-sm cursor-pointer hover:bg-slate-100 ${!isFirst && 'border-t border-t-borderPrimary'}`}
    >
      <span className=" font-semibold">{namePart}</span>
      {regionPart}
      {countryPart}
    </li>
  );
};

export default SearchResultsSingleItem;
