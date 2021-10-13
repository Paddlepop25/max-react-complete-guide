import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const todos = [new Todo('Learn Angular'), new Todo('Learn Vue')];

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
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
