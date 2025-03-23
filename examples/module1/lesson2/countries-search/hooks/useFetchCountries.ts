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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchStrategies = {
    default: fetchAllCountries,
    name: fetchCountriesByName,
    language: fetchCountriesByLanguage,
    currency: fetchCountriesByCurrency,
    capital: fetchCountriesByCapital,
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const fetchFn =
          searchValue === ''
            ? fetchAllCountries
            : (fetchStrategies[searchTerm] ?? fetchStrategies.default);

        const data = await fetchFn(searchValue);
        setCountries(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'An expected error ocurred'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchValue, searchTerm]);

  return {
    countries,
    isLoading,
    error,
  };
};

export default useFetchCountires;
