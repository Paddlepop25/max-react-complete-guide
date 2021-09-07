import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authReducer from './authSlice';

// for toolkit, behind the scenes many reducers will be merged into one big reducer
const store = configureStore({
  reducer: { counter: counterSlice, auth: authReducer },
});

export default store;
