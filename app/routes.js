import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';

import App from './containers/App';
import CounterPage from './containers/CounterPage';
import MainPage from './containers/mainpage';

export default (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route  exact path="/mainpage" component={MainPage} />
  </Switch>
);
