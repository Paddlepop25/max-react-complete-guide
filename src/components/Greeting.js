import React, { useState } from 'react';

const Greeting = () => {
  const [changeText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <h1>Hello 🌏 World!!!!!</h1>
      {!changeText && <code>It's good to see ya!</code>}
      {changeText && <code>Changed!</code>}
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
