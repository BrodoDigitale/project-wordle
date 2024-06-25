import React from 'react';

function GuessResults(props) {
  const results = props.results;
  return (
      <div className="guess-results">
        {results.map((res, idx)=> <p className="guess" key={`${res + idx}`}>{res}</p>)}
      </div>
  )
}

export default GuessResults;
