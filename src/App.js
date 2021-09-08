import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

// don't want to sent to firebase for first time coz will send empty object and overwrite
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // this will dispatch when application starts
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  /* don't use async await in useEffect like async () =>
  but instead wrap the fetch inside a function
  */
  useEffect(() => {
    /* 
   this is 2nd way to solve asynchronous code by writing thunk (in cart-slice.js)
   see previous branch for 1st way by writing code in this App component/file
   */

    // don't want to send to firebase for first time coz will send empty object and overwrite data
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
