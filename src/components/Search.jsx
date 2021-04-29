import React, { useState } from 'react';
const Search = () => {
  const [term, setTerm] = useState('');
  return (
    <div>
      <div className="ui input ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
