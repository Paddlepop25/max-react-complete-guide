import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todoContext = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // something?.value = try to get me the value, if its null, store as null
    // something!.value = only use ! when you sure it will never be null
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an erorr
      return;
    }

    // todoContext.onAddTodo(enteredText);
    todoContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Enter todo: </label>
      <input
        type='text'
        id='text'
        placeholder='e.g buy maggi mee'
        ref={todoTextInputRef}
      />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
