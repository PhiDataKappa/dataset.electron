'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = configureStore;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxLocalstorage = require('redux-localstorage');

var _reduxLocalstorage2 = _interopRequireDefault(_reduxLocalstorage);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _homepage = require('./actions/homepage.js');

var homeActions = _interopRequireWildcard(_homepage);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState, routerHistory) {
  var router = (0, _reactRouterRedux.routerMiddleware)(routerHistory);

  var actionCreators = (0, _extends3.default)({}, _reactRouterRedux.routerActions, homeActions);

  var middlewares = [_reduxThunk2.default, router];

  var composeEnhancers = function () {
    var compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators: actionCreators });
    }
    return _redux.compose;
  }();

  var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares), (0, _reduxLocalstorage2.default)());

  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
}