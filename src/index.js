import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import { INDEX } from './constants/routePaths';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound/NotFound';

require('./favicon.ico');

const history = createHistory();
const store = configureStore({}, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path={INDEX} component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('react-app')
);
