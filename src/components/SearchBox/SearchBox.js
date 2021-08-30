import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="searchBox">
      <input
        onChange={onSearchChange}
        className="searchInput"
        type="Search"
        placeholder="search items"
      />
    </div>
  );
};
export default SearchBox;
