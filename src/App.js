import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

/**
 * Switch is to find the first match for the route from top to bottom, then will stop
 * exact will match only the exact path
 */
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

/**
 * our-domain-name/welcome -----> Welcome component
 * our-domain-name/products -----> Products component
 * our-domain-name/product-detail/anyDynamicValue -----> ProductDetail component
 */
