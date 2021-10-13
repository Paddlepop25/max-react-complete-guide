import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  // type never means it must always be empty array, no values are allowed in there
  // useState<Todo[]>([]) means it will be empty array [] at first but eventually will be array of Todo
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
    const newTodo = new Todo(todoText);

    // if want to update state based on previous state, should use () => {}
    // concat will create new array and not mutate existing array
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    console.log('delete', todoId);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
