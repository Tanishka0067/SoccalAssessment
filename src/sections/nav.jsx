import React from 'react';
import { Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import logo from '../assets/logo.svg';

const Nav = ({ onSearch }) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between px-8 p-4  ">
        <div className="flex flex-row justify-around gap-8 w-4/6 items-center">
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <div className="w-full">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
        <div className="flex flex-row md:justify-end gap-6 items-center md:w-2/6">
          <div>
            <p className="text-base">Ghaziabad</p>
          </div>
          <div>
            <button className="bg-red-500 text-nowrap p-1 px-6 text-white rounded-md hover:bg-red-600">
              Sign in
            </button>
          </div>
          <div>
            <Menu size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
