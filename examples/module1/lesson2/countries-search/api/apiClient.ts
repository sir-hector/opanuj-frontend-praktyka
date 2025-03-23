// import { Country } from '../types';

import type { Country } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1';

const fetchAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found.');
    } else {
      throw new Error('Failed to fetch all countries.');
    }
  }

  const data: Country[] = await response.json();
  return data;
};

const fetchCountriesByName = async (name: string) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);

  if (!response.ok) {
    generateResponseMessage('name', name, response.status === 404);
  }

  const data: Country[] = await response.json();
  return data;
};

const fetchCountriesByCurrency = async (currency: string) => {
  const response = await fetch(`${BASE_URL}/currency/${currency}`);

  if (!response.ok) {
    generateResponseMessage('currency', currency, response.status === 404);
  }

  const data: Country[] = await response.json();
  return data;
};

const fetchCountriesByLanguage = async (language: string) => {
  const response = await fetch(`${BASE_URL}/lang/${language}`);
  console.log(response);

  if (!response.ok) {
    generateResponseMessage('language', language, response.status === 404);
  }

  const data: Country[] = await response.json();
  return data;
};

const fetchCountriesByCapital = async (capital: string) => {
  const response = await fetch(`${BASE_URL}/capital/${capital}`);

  if (!response.ok) {
    generateResponseMessage('capital', capital, response.status === 404);
  }

  const data: Country[] = await response.json();
  return data;
};

const generateResponseMessage = (
  type: string,
  value: string,
  isNotFound: boolean
) => {
  if (isNotFound) {
    return `No countries found with ${type}: ${value}.`;
  } else {
    return `Failed to fetch countries by ${type}: ${value}.`;
  }
};

export {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByCapital,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
};
