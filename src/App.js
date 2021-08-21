import React from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';

function App() {
  const [toggleShowText, setToggleShowText] = React.useState(false);

  const onClickHandler = () => {
    setToggleShowText((prevState) => !prevState);
  };

  console.log('App');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={toggleShowText} />
      <Button onClick={onClickHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
