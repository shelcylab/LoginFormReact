import React, {useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext'

function Header({ title, itemCount }) {
  const lang = useContext(LanguageContext)
  return (
    <header className='header'>
      <h1>{title}</h1>
      <span>Number of Tasks: {itemCount}</span>
      <span>Context { lang }</span>
    </header>
  );
}

export default Header;
