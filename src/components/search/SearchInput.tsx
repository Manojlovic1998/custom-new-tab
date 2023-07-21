import { useState } from "react";
import { SearchEngineName, performSearch } from "@startpage/search";
import SearchDefaultSettings from "./SearchDefaultSettings";
import SearchEngineMenu from "./SearchEngineMenu";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchEngine, setSearchEngine] = useState<SearchEngineName>("google");

  const search = () =>
    performSearch(searchValue, searchEngine, SearchDefaultSettings);

  return (
    <>
      <SearchEngineMenu
        searchEngine={searchEngine}
        searchEngineSetter={setSearchEngine}
      />
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
