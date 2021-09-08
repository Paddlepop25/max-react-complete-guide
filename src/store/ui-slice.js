import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  cartIsVisible: false,
  notification: null,
};

/* reduxtoolkit use 3rd party library IMER to make copy of code 
so state is immutable, though it looks like we changing state directly here
*/
const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
