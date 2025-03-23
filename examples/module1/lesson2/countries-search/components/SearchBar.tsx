import { debounce } from 'es-toolkit';
import { useCallback, useEffect, useState } from 'react';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
  filterType: string;
};

const SearchBar = ({
  value: externalSearchValue,
  setValue,
  filterType,
}: SearchBarProps) => {
  const [localSearchValue, setLocalSearchValue] = useState(externalSearchValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSearchValue(newValue);
    setExternalSearchValue(newValue);
  };

  const setExternalSearchValue = useCallback(
    debounce((value: string) => {
      setValue(value);
    }, 500),
    []
  );

  useEffect(() => {
    setLocalSearchValue(externalSearchValue);
  }, [externalSearchValue]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={localSearchValue}
        onChange={handleChange}
        placeholder={`Search by country's ${filterType}...`}
        className="w-full p-2 border"
      />
    </div>
  );
};

export default SearchBar;
