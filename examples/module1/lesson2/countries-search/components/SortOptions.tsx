import type { SortOptions } from '../types';

type FilterOptionProps = {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
};

const SortOption = ({ value, setValue }: FilterOptionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as SortOptions);
  };
  return (
    <label className="text-black">
      Sort by:
      <select
        id="filter"
        value={value}
        className="border p-2 bg-white"
        onChange={handleChange}
      >
        <option value="alphabetical">alphabetical</option>
        <option value="population">population</option>
      </select>
    </label>
  );
};

export default SortOption;
