'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Root;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Root(_ref) {
  var store = _ref.store,
      history = _ref.history;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: history },
      _react2.default.createElement(_routes2.default, null)
    )
  );
}