import React from 'react';
import mealImage from '../../assets/meals.jpeg'; // can rename it in import xxx
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt='Table full of delicious food' />
      </div>
    </>
  );
};

export default Header;
