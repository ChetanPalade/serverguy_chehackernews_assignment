
import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, addSearchHistory } from '../store';

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(setQuery(e.target.value));
      dispatch(addSearchHistory({ query: e.target.value, time: new Date() }));
    }
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search stories by title, author, or URL"  onKeyPress={handleSearch} />
    </div>
  );
}
