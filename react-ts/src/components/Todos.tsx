import React, { useContext } from 'react';
import TodoList from './TodoList';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

// export interface Todo {
//   id: string;
//   text: string;
// }

const Todos: React.FC = () => {
  const todoContext = useContext(TodosContext);

  return (
    <>
      <ul className={classes.todos}>
        {todoContext.items.map((item) => (
          <TodoList
            key={item.id}
            text={item.text}
            onDeleteTodo={todoContext.deleteTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
