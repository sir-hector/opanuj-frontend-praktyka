import { useEffect, useState } from 'react';
import type { Country, FilterOptions } from '../types';
import {
  fetchAllCountries,
  fetchCountriesByCapital,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByName,
} from '../api/apiClient';

const useFetchCountires = (searchValue: string, searchTerm: FilterOptions) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchStrategies = {
    default: fetchAllCountries,
    name: fetchCountriesByName,
    language: fetchCountriesByLanguage,
    currency: fetchCountriesByCurrency,
    capital: fetchCountriesByCapital,
  };

  console.log(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchFn =
          searchValue === ''
            ? fetchAllCountries
            : (fetchStrategies[searchTerm] ?? fetchStrategies.default);

        const data = await fetchFn(searchValue);
        setCountries(data);
      } catch {}
    };

    fetchData();
  }, [searchValue, searchTerm]);

  return {
    countries,
  };
};

export default useFetchCountires;
