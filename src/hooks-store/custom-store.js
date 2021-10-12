import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// custom hook to share logic AND data
export const useCustomStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((lis) => lis !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initCustomStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
