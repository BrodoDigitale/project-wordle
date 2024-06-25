import React, {useCallback, useState} from 'react';

function GuessInput({ onSubmit }) {
  const [word, setWord] = useState('');

  const onChange = useCallback((e) => {
    setWord(e.target.value.trim().toUpperCase());
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(word);
    setWord('');
  }, [onSubmit, word])

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            title="5 letter words"
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            value={word}
            onChange={onChange}
            required
        />
      </form>
  )

}

export default GuessInput;
