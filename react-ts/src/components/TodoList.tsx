import React from 'react';
import classes from './TodoList.module.css';

const TodoList: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoList;
