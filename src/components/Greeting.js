import React, { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changeText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <h1>Hello 🌏 World!!!!!</h1>
      {!changeText && <Output>It's good to see ya!</Output>}
      {changeText && <Output>Changed!</Output>}
      <br />
      <br />
      <button
        data-testid='greeting__change-text-button'
        onClick={changeTextHandler}
      >
        Change Text
      </button>
    </>
  );
};

export default Greeting;
