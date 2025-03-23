import { useEffect, useState } from 'react';
import type { Country } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1';

const useFetchCountires = (searchValue: string, searchTerm: string) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/name/${searchValue}`);
      if (response.status === 200) {
        const data: Country[] = await response.json();
        setCountries(data);
      } else {
        setCountries([]);
      }
    };

    fetchData();
  }, [searchValue, searchTerm]);

  return {
    countries,
  };
};

export default useFetchCountires;
