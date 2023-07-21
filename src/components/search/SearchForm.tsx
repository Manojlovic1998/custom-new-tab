import SearchInput from "./SearchInput";

const SearchForm = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form id="searchbar" onSubmit={onSubmitHandler}>
      <SearchInput />
    </form>
  );
};

export default SearchForm;
