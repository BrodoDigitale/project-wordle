import React from "react";

function HappyBanner({ num }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${num} ${num > 1 ? "guesses" : "guess"}`}</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
