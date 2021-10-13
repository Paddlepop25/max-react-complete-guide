import React from 'react';

const TodoList: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoList;
