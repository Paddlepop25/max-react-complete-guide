import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// to display cart items from firebase when first load
// want to wrap in try catch so create an async function to make it return promise
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://max-udemy-http-b52eb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const cartData = await fetchData();
      // console.log(cartData);
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed :(',
        })
      );
    }
  };
};

// thunk is a function that delays an action until later
// thunk is a function that return another function
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    // to send item added to cart data to firebase
    const sendRequest = async () => {
      const response = await fetch(
        'https://max-udemy-http-b52eb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed :(',
        })
      );
    }
  };
};
