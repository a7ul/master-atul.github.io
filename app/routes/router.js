import React from 'react';
import createHistory from 'history/createHashHistory';
import ReactGA from 'react-ga';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware, push, goBack} from 'react-router-redux';

import Home from '../pages/Home/Home.page';
import Experiments from '../pages/Experiments/Experiments.page';
import Libraries from '../pages/Libraries/Libraries.page';
import TalksPage from '../pages/Talks/Talks.page';

const history = createHistory();

ReactGA.initialize('UA-65870043');

history.listen((location) => {
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
});

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/experiments' component={Experiments}/>
      <Route path='/libraries' component={Libraries}/>
      <Route path='/talks' component={TalksPage}/>
    </div>
  </ConnectedRouter>
);

export default Router;
export const reduxRouterMiddleware = routerMiddleware(history);
export const routerActions = {push, goBack};
