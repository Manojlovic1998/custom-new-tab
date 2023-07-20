import { useState } from "react";
import { SearchEngineName, performSearch } from "@startpage/search";
import SearchDefaultSettings from "./SearchDefaultSettings";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchEngine, setSearchEngine] = useState<SearchEngineName>("google");

  const search = () =>
    performSearch(searchValue, searchEngine, SearchDefaultSettings);

  return (
    <>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={search}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className="visually-hidden">Search</span>
      </button>
      <input
        type="text"
        placeholder="Search wisely!"
        autoFocus
        value={searchValue}
        onKeyUp={(event) => event.key === "Enter" && search()}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
};

export default SearchInput;
