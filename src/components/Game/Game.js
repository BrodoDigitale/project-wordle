import React, { useCallback } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

const gameStatus = {
  running: "RUNNING",
  won: "WON",
  lost: "LOST",
};
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [status, setStatus] = React.useState(gameStatus.running);

  const addGuess = useCallback(
    (word) => {
      const newResults = [...results, word];
      setResults(newResults);
      if (word === answer) {
        return setStatus(gameStatus.won);
      }
      if (newResults.length === NUM_OF_GUESSES_ALLOWED) {
        setStatus(gameStatus.lost);
      }
    },
    [results]
  );

  return (
    <>
      <GuessResults results={results} answer={answer} />
      {status === gameStatus.won && <HappyBanner num={results.length} />}
      {status === gameStatus.lost && <SadBanner answer={answer} />}
      <GuessInput
        onSubmit={addGuess}
        disabled={gameStatus !== gameStatus.running}
      />
    </>
  );
}

export default Game;
