import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

// NEVER mutate exisiting state. so always make a copy first
const counterReducer = (state = initialState, action) => {
  // if (action.type === 'increment') {
  //   return {
  //     ...state,
  //     counter: state.counter + 1,
  //   };
  // }

  // if (action.type === 'increase') {
  //   return {
  //     ...state,
  //     counter: state.counter + action.payload,
  //   };
  // }

  // if (action.type === 'decrement') {
  //   return {
  //     ...state,
  //     counter: state.counter - 1,
  //   };
  // }

  // if (action.type === 'toggle') {
  //   return {
  //     ...state,
  //     showCounter: !state.showCounter,
  //   };
  // }
  // return initialState;

  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'decrement': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case 'toggle': {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
    case 'increase': {
      return {
        ...state,
        counter: state.counter + 5,
      };
    }
    default: {
      return initialState;
    }
  }
};

const store = createStore(counterReducer);

export default store;
