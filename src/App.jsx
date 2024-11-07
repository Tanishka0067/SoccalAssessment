import React, { useState } from 'react';
import Carousel from './sections/Caraousel';
import CategoryBar from './sections/CategoryBar';
import MoviesDisp from './sections/MoviesDisp';
import nav from './sections/nav';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <nav onSearch={setSearchQuery} />
      <CategoryBar />
      <div className="">
        {!searchQuery && <Carousel />}
      </div>
      <h2 className="font-bold text-2xl w-max px-24 pt-6 text-gray-800/90">
        {searchQuery ? `Search Results for "${searchQuery}":` : 'Recommended Movies:'}
      </h2>
      <MoviesDisp searchQuery={searchQuery} />
    </>
  );
}

export default App;
