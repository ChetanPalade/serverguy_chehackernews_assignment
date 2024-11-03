
import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './Searchbar';

export default function Header() {
  const user = useSelector(state => state.app.user);


  return (
    <header className="header">
      
      <h1>Hacker News Search  </h1>
     
      <SearchBar className="search-bar"/>
   
      <div  className="header">{user ? `Hello, ${user}` : 'Welcome!'}</div>
      
  
    </header>
  );
}

