import React, {useCallback, useState} from 'react';

function GuessInput() {
  const [word, setWord] = useState('');

  const onChange = useCallback((e) => {
    setWord(e.target.value.trim().toUpperCase());
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(word);
    setWord('');
  }, [word])

  return (
      <form className="guess-input-wrapper" onSubmit={onSubmit}>
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
