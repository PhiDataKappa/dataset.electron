'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LoginPage = require('./containers/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _LoggedInPage = require('./containers/LoggedInPage');

var _LoggedInPage2 = _interopRequireDefault(_LoggedInPage);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _CounterPage = require('./containers/CounterPage');

var _CounterPage2 = _interopRequireDefault(_CounterPage);

var _mainpage = require('./containers/mainpage');

var _mainpage2 = _interopRequireDefault(_mainpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _LoginPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/loggedin', component: _LoggedInPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/mainpage', component: _mainpage2.default })
);
//# sourceMappingURL=routes.js.map