import React from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // only logic will be shared from custom hooks, not state
  const counter = useCounter(); // will have value of the returned 'counter' from useCounter hook

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
