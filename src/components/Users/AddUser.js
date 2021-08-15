import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const onInputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onButtonClickHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    // add '+' infront to force it to be a number
    if (+age < 1) {
      return;
    }
    props.addUser(userName, age);
    setUserName('');
    setAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={onInputChangeHandler}
          value={userName}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={onAgeChangeHandler}
          value={age}
        />
        <Button type='submit' onClickHandler={onButtonClickHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
