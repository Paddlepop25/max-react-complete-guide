import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [new Todo('Learn Angular'), new Todo('Learn Vue')];

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
