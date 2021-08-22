import React, { useState, useEffect } from 'react';

// custom hook must start with 'use'
// only logic will be shared from custom hooks, not state
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // this forwards dependency will changee

  return counter;
};

export default useCounter;
