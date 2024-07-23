import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults(props) {
  const results = props.results;
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Guess result={results[num]} key={`${num}`} answer={props.answer} />
        );
      })}
    </div>
  );
}

export default GuessResults;
