import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Fix: Add parentheses to prevent default form submission behavior
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <div className="flex items-center w-full border border-zinc-500 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
      <Search size={24} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        className="text-gray-500 flex-1 outline-none bg-transparent"
        value={query}
        onChange={handleSearch}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
