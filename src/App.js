import React, { useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';

// useCallback hook allows us to store functions
// the stored functions should not be re-created with every with every execution
// but it will point to the same function stored in memory

function App() {
  const [toggleShowText, setToggleShowText] = React.useState(false);

  // if we sure this function will never change, we can use useCallback to store it
  // also need array of dependencies like useEffect
  const onClickHandler = useCallback(() => {
    setToggleShowText((prevState) => !prevState);
  }, []); // [] --> any state, props, context

  console.log('App');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={onClickHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
