import React, { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    props.filterTasks(e.target.value);
  };
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
