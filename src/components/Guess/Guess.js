import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess(props) {
  const res = checkGuess(props.result, props.answer);
  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <span className={`cell ${res ? res[num].status : ""}`} key={num}>
          {res ? res[num].letter : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
