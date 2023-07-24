import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const submitHandler = (e) => {
    e.preventDefault();
    let searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash Images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
