import { useEffect, useMemo, useState } from 'react';
import useFetchCountires from '../hooks/useFetchCountries';
import SearchBar from '../components/SearchBar';
import type { FilterOptions, SortOptions } from '../types';
import FilterOption from '../components/FilterOption';
import SortOption from '../components/SortOptions';
import CountryList from '../components/CountryList';
import ErrorBoundary from '../components/ErrorBoundary';
import Pagination from '../components/Pagination';

const CountriesSearchContainer = () => {
  const [name, setName] = useState('');
  const [filterType, setFilterType] = useState<FilterOptions>('name');
  const [sortOption, setSortOption] = useState<SortOptions>('alphabetical');
  const { countries, isLoading, error } = useFetchCountires(name, filterType);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  const sortedCountries = useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortOption === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOption === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }
    return sorted;
  }, [countries, sortOption]);

  // total pages

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  // current page
  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [filterType, name, sortOption]);

  // filter current countries
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  console.log(totalPages);

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
      <ErrorBoundary>
        <CountryList countries={currentCountries} />
        <Pagination
          pages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </ErrorBoundary>
    </main>
  );
};

export default CountriesSearchContainer;
