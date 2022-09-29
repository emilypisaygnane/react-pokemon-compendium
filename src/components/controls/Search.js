import React from 'react';
import './Search.css';

export default function Search({ setSearch, setSelectedType }) {
  return (
    <>
      <form 
        className='search' 
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const data = new FormData(form);
          const searchData = data.get('search');

          setSearch(searchData);
          setSelectedType('all');
          
          form.reset();
        }}>

        <label htmlFor="search">Search for a Pokemon
          <input name="search" placeholder="enter name" />
          <button>Go</button>
        </label>
      </form>
    </>
  );
}