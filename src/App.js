import React, { Suspense } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AllQuotes from './pages/AllQuotes';
// import NotFound from './pages/NotFound';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  // so in there I wanna have page that shows all quotes
  // then I had a Quote Detail page (when I click on a single quote I would go to that page)
  // and I had that page for adding a brand new quote

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            {/* this wild card character -- '*' --- signals to react router
          that any path any URL should match this Route (so that's why for NotFound page we place it at the end of Switch) */}
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
