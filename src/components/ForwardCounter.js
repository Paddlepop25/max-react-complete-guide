import React from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // only logic will be shared from custom hooks, not state
  // will have value of the returned 'counter' from useCounter hook
  // default is true (forwards = true) so no need to add anything in useCounter()
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
