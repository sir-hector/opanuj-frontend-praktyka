import { useEffect, useState } from 'react';
import type { Country } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1';

const useFetchCountires = (searchValue: string, searchTerm: string) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${BASE_URL}/name/${searchValue}`).then(
        (response) => response.json()
      );

      setCountries(data);
    };

    fetchData();
  }, [searchValue, searchTerm]);

  return {
    countries,
  };
};

export default useFetchCountires;
