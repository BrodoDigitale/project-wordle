import React, {useCallback} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  const addGuess = useCallback((word) => {
    setResults([...results, word]);
  }, [results]);

  return(
      <>
          <GuessInput onSubmit={addGuess}/>
          <GuessResults results={results} />
      </>
  );
}

export default Game;
