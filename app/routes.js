import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MainPage from './containers/MainPage';


export default (
  <App>
    <Switch>
      <Route exact path="/mainpage" component={MainPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </App>
);
