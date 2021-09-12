import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// this will load component ONLY when it is needed, not downloaded in advance
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const Quotes = React.lazy(() => import('./pages/Quotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <Quotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
