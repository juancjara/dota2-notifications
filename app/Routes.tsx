/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import Layout from './components/Layout';
import HomePage from './pages/Home';

// Lazily load routes and code split with webpack
/*
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ /*'./pages/Home')
);
*/

/*
const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);
*/

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </Layout>
  );
}
