'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _HomePage = require('./containers/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _MainPage = require('./containers/MainPage');

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _App2.default,
  null,
  _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/mainpage', component: _MainPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _HomePage2.default })
  )
);