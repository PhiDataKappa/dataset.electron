'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _history = require('history');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _MainPage = require('./containers/MainPage');

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var syncHistoryWithStore = function syncHistoryWithStore(store, history) {
  var _store$getState = store.getState(),
      routing = _store$getState.routing;

  if (routing && routing.location) {
    history.replace(routing.location);
  }
};

var initialState = {};
var routerHistory = (0, _history.createHashHistory)();
var store = (0, _store2.default)(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

var rootElement = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
  _MuiThemeProvider2.default,
  { muiTheme: (0, _getMuiTheme2.default)(_darkBaseTheme2.default) },
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: routerHistory },
      _routes2.default
    )
  )
), rootElement);