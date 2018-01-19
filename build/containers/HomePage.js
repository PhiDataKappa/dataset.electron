'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _homepage = require('../actions/homepage');

var HomeActions = _interopRequireWildcard(_homepage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}
*/

function mapStateToProps(state) {
  return {
    access_token: state.token,
    shouldRedirect: state.shouldRedirect
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(HomeActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);