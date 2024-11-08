import React, { useState } from 'react';
import Carousel from './sections/Caraousel';
import CategoryBar from './sections/CategoryBar';
import MoviesDisp from './sections/MoviesDisp';
import Nav from './sections/Nav';
import './App.css';
import Footer from './sections/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Nav onSearch={setSearchQuery} />
      <CategoryBar />
      <div className="">
        {!searchQuery && <Carousel />}
      </div>
      <h2 className="font-bold text-2xl w-max px-24 pt-6 text-gray-800/90">
        {searchQuery ? `Search Results for "${searchQuery}":` : 'Recommended Movies:'}
      </h2>
      <MoviesDisp searchQuery={searchQuery} />
      <Footer/>
    </>
  );
}

export default App;
