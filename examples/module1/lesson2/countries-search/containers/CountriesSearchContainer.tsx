import { useEffect, useState } from 'react';
import useFetchCountires from '../hooks/useFetchCountries';
import SearchBar from '../components/SearchBar';

const CountriesSearchContainer = () => {
  const [name, setName] = useState('');
  const { countries } = useFetchCountires(name, 'name');

  console.log(countries);
  console.log(name);

  return (
    <main className="container mx-auto py-4">
      {/* serach form */}
      <form>
        <input
          type="text"
          placeholder="Search by country's name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <SearchBar value={name} />

      {/* filter options list */}
      {/* countries list */}
    </main>
  );
};

export default CountriesSearchContainer;
