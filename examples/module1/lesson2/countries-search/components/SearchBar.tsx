type SearchBarProps = {
  value: string;
};

const SearchBar = ({ value }: SearchBarProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={() => console.log('handleChange')}
        placeholder={`Search by country's ${'filterType'}...`}
        className="w-full p-2 border bg-white"
      />
    </div>
  );
};

export default SearchBar;
