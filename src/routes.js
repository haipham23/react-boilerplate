import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { INDEX } from './constants/routePaths';

import App from './containers/App/App';
import Home from './containers/Home/Home';

import NotFound from './components/NotFound/NotFound';

export default (
  <Route path={INDEX} component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);
