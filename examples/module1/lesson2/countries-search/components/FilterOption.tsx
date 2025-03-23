import type { FilterOptions } from '../types';

type FilterOptionProps = {
  value: FilterOptions;
  setValue: (value: FilterOptions) => void;
};

const FilterOption = ({ value, setValue }: FilterOptionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as FilterOptions);
  };
  return (
    <label className="text-black">
      Search by:
      <select
        id="filter"
        className="border p-2 bg-white"
        value={value}
        onChange={handleChange}
      >
        <option value="name">Name</option>
        <option value="currency">Currency</option>
        <option value="language">Language</option>
        <option value="capital">Capital</option>
      </select>
    </label>
  );
};

export default FilterOption;
