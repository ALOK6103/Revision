import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debounceSearch(value);
  };

  const debounceSearch = (value) => {
    clearTimeout(debounceSearch.timeout);
    debounceSearch.timeout = setTimeout(() => {
      // Call your search function here
      performSearch(value);
    }, 3000);
  };

  const performSearch = async (value) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${value}`);
      const data = await response.json();
      // Perform logic with the search results
      console.log('Search results:', data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />    
    </div>
  );
};

export default SearchBar;
