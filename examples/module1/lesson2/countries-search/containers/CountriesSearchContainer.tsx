import { useEffect, useState } from 'react';
import useFetchCountires from '../hooks/useFetchCountries';
import SearchBar from '../components/SearchBar';
import type { FilterOptions, SortOptions } from '../types';
import FilterOption from '../components/FilterOption';
import SortOption from '../components/SortOptions';
import CountryList from '../components/CountryList';

const CountriesSearchContainer = () => {
  const [name, setName] = useState('');
  const [filterType, setFilterType] = useState<FilterOptions>('name');
  const [sortOption, setSortOption] = useState<SortOptions>('alphabetical');
  const { countries } = useFetchCountires(name, filterType);

  return (
    <main className="container mx-auto py-4">
      <div className="flex">
        {/* search bar form */}
        <SearchBar value={name} setValue={setName} filterType={filterType} />
        {/* filter options list */}
        <FilterOption value={filterType} setValue={setFilterType} />
        <SortOption value={sortOption} setValue={setSortOption} />
      </div>
      {/* countries list */}
      <CountryList countries={countries} />
    </main>
  );
};

export default CountriesSearchContainer;
