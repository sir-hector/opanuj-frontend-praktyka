import type { Country } from '../types';
import CountryCard from './CountryCard';

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {countries.map((country) => {
        return <CountryCard key={country.cca3} country={country} />;
      })}
    </div>
  );
};

export default CountryList;
