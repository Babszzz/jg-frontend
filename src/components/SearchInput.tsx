import { Dispatch, SetStateAction, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "./Button";

interface SearchInputProps {
  name?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({
  name = "search",
  placeholder = "Search ...",
  disabled = false,
  setSearchQuery,
  className,
}: SearchInputProps) => {
  const [value, setValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    setSearchQuery(value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center w-full ${className || ""}`}
    >
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        className="h-12 pl-10 pr-3 py-2 border outline-none focus:border-gray-200 rounded-xl focus-visible:border-gray-200 text-gray-900 appearance-none w-full bg-white"
      />
      <IoSearchSharp
        size={20}
        className="text-gray-500 absolute left-3 pointer-events-none"
      />
      <Button title="Search" type="submit" className="absolute right-1" />
      {/* <button
        type="submit"
        className="absolute right-1 px-3 py-1 text-sm bg-yellow-500 h-10 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Search
      </button> */}
    </form>
  );
};

export default SearchInput;
