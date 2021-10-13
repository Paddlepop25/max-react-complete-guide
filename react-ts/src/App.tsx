import Todos from './components/Todos';
// import Todo from './models/todo';

function App() {
  // const todos = [new Todo('Learn Angular'), new Todo('Learn Vue')];

  const todos = [
    {
      id: '1',
      text: 'remove class',
    },
    {
      id: '2',
      text: 'add interface in Todos.tsx',
    },
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
