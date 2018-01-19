import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';
import routes from './routes';
import configureStore from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MainPage from './containers/MainPage'

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if(routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {};
const routerHistory = createHashHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

const rootElement = document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        {routes}
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  rootElement
);
