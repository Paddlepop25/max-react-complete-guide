import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT': {
      return { value: action.value, isTouched: state.isTouched };
    }
    case 'BLUR': {
      return { value: state.value, isTouched: true };
    }
    case 'RESET': {
      return {
        value: '',
        isTouched: false,
      };
    }
    default:
      return initialState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  // we return these so the below can be called from components that use this custom hook
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
