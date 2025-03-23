import { useEffect, useState } from 'react';
import useFetchCountires from '../hooks/useFetchCountries';

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

      {/* character list */}
    </main>
  );
};

export default CountriesSearchContainer;
