import React from "react";
import { range } from "../../utils";

function Guess(props) {
  const res = props.result;
  return (
    <p className="guess">
      {range(0, 5).map((letter) => (
        <span className="cell" key={letter}>
          {res ? res[letter] : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
