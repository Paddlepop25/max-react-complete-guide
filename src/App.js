import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

/**
 * our-domain-name/welcome -----> Welcome component
 * our-domain-name/products -----> Products component
 */
