import React from 'react';
import mealImage from '../../assets/meals.jpeg'; // can rename it in import xxx
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClickButton={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt='Table full of delicious food' />
      </div>
    </>
  );
};

export default Header;
