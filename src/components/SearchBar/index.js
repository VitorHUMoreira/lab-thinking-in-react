function SearchBar({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search-container">
      <h4>Search</h4>
      <input
        value={search}
        onChange={handleChange}
        type="search"
        className="search-input"
      />
      <input type="checkbox" id="stock" />
      <label htmlFor="stock">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
