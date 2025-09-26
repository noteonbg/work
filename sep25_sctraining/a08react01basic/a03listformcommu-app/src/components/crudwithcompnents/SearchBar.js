import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
  />
);

export default SearchBar;
