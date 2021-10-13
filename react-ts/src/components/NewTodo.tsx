import React from 'react';

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Enter todo: </label>
      <input type='text' id='text' placeholder='e.g buy maggi mee' />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
