import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState('React');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    /*initial render omits setTimeout*/
    if (term && !results.length) {
      search();
    } else {
      /*searches after user stops typing*/
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 3000);
      /*resets the setTimeout timer using useEffect cleanup function*/
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]); //end of useEffect

  /*map through results and render*/
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  }); //end of renderResults

  /*return to ui*/
  return (
    <div>
      <div className="ui input ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}; //end of return

export default Search;
