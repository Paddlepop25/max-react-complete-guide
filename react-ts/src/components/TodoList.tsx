import React from 'react';
import classes from './TodoList.module.css';

const TodoList: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};

export default TodoList;
