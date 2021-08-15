import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const onInputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty values)',
      });
      return;
    }
    // add '+' infront to force it to be a number
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.addUser(userName, age);
    setUserName('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          {/* <Button type='submit' onClickHandler={onButtonClickHandler}> */}
          <Button type='submit' onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
