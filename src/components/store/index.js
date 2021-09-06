import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

// createSlice is more powerful than createReducer
// can create different slices in different files
// the 4 methods will automatically be called depending which action was triggered
// allowed to mutate state because reduxtool kit internally make a copy of the state and we just change what we want to change here
createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// NEVER mutate exisiting state. so always make a copy first
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return initialState;

// switch (action.type) {
//   case 'increment': {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   case 'decrement': {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   case 'toggle': {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   case 'increase': {
//     return {
//       ...state,
//       counter: state.counter + 5,
//     };
//   }
//   default: {
//     return initialState;
//   }
// }
// };

const store = createStore(counterReducer);

export default store;
