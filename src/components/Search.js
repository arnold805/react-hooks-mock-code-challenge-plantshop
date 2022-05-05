import React from "react";

function Search({search, setSearch}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={event => {setSearch(event.target.value)}}
      />
    </div>
  );
}

export default Search;
