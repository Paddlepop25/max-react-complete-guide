import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn Angular'), new Todo('Learn Vue')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
